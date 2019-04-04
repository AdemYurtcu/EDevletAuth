var EDConfiguration = {
    AuthURL: "https://giris.turkiye.gov.tr/OAuth2AuthorizationServer/AuthorizationController",

    TokenURL: "https://giris.turkiye.gov.tr/OAuth2AuthorizationServer/AccessTokenController",

    ResponseURL: "https://giris.turkiye.gov.tr/OAuth2AuthorizationServer/AuthenticationController",

    ClientId: "",

    ClientSecret="",

    RedirectUri: "",
}

var EDAuth = {

    RedirectForLogin: function (State,Scope) {
        window.location = EDConfiguration.AuthURL
            + "?response_type=code&client_id=" + EDConfiguration.ClientId + "&state=" + State + "&scope=" +
            Scope + "&redirect_uri=" + EDConfiguration.RedirectUri;
    },

    GetResponseAuthCode: function () {
        try {
            var error = this.GetUrlParameter("error");
            if (error == "") {
                EDAuthFunctionResult.Success = true;
                EDAuthFunctionResult.AuthorizationCode = this.GetUrlParameter("code");
            } else {
                EDAuthFunctionResult.Success = false;
                EDAuthFunctionResult.ErrorMessage = this.GetUrlParameter("error_description");
            }
        }
        catch (ex) {
            
        }
        return EDAuthFunctionResult;
    },

    GetUrlParameter: function (sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    }
}

var EDFunctionResult = {

    Success=false,

    ErrorMessage="",

    AuthorizationCode = "",

    AccessToken=""
}

var EDToken = {

    GetAccessToken: function (AuthorizationCode) {
        $.ajax({
            url: EDConfiguration.TokenURL + "?grant_type=authorization_code&client_id=" + EDConfiguration.ClientId + "&client_secret=" + EDConfiguration.ClientSecret + "&code=" + AuthorizationCode + "&redirect_uri=" + EDConfiguration.RedirectUri,
            method: "POST",
            async: false,
            success: function (data) {
                if (data.access_token != undefined) {
                    EDFunctionResult.Success = true;
                    EDFunctionResult.AccessToken = data.access_token;
                }
                else {
                    EDFunctionResult.Success = false;
                    EDFunctionResult.ErrorMessage = data.error_description
                }
                return EDFunctionResult;
            }
        });
    }

}

var EDFunctions = {

    GetPersonInfo: function (AccessToken) {
        $.ajax({
            url: EDConfiguration.TokenURL + "?accessToken=" + AccessToken + "&resourceId=1&kapsam=Ad-Soyad&clientId=" + EDConfiguration.ClientId,
            method: "POST",
            async: false,
            success: function (data) {
                if (data.sonucKodu == "EDV09.000") {
                    EDPersonInfo.Success = true;
                    EDPersonInfo.Person.Identity = data.kullaniciBilgileri.kimlikNo;
                    EDPersonInfo.Person.Name = data.kullaniciBilgileri.ad;
                    EDPersonInfo.Person.Surmame = data.kullaniciBilgileri.soyad;
                }
                else {
                    EDPersonInfo.Success = false;
                    EDPersonInfo.ErrorMessage = data.sonucAciklamasi;
                }
                return EDPersonInfo;
            }
        });
    }

}

var EDPersonInfo = {

    Person: {
        Identity: "",
        Name: "",
        Surmame :""
    },

    Success: false,

    ErrorMessage :""

}