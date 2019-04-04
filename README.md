
Edevlet kullannıcı login üzerinden kullanıcı girişi yapılması ve oturum açan kullanıcının bilgilerinin alınmasını sağlayan JavaScript Uygulaması.

<b><h1>EDConfiguration</h1></b>

Entegrasyon yapacak kurumun entegrasyonda kullanılacak parametrelerinin tanımlamasının yapıldığı yapıdır. Entegrasyonda kullanılan tanımlamalar aşağıdaki gibidir. 

<ul>
  <li><b>ClientId : </b> Edevlet entegrasyonunda kullanılmak üzere kuruma verilmiş istemci Id dir.</li>
  <li><b>ClientSecret : </b> Kurum uygulaması için belirlenmiş olan gizli anahtar değeridir.</li>
  <li><b>RedirectUri : </b> Login işleminden sonra yönlendirilecek web sayfası.</li>
</ul>

<b><h1>EDFunctionResult</h1></b>

EDevlet entegrasyonundan dönen sonucu tutulduğu yapıdır.

<ul>
  <li><b>Success : </b> İşlemin başarılı olup olmadığı bilgisini tutar</li>
  <li><b>ErrorMessage : </b> İşlem başarısız ise hata mesajı bilgisini tutar</li>
  <li><b>AuthorizationCode : </b> Edevlette oluşturulan AuthorizationCode değerini tutar.</li>
  <li><b>AccessToken : </b> Edevlette oluşturulan AccessToken değerini tutar.</li>
</ul>

<b><h1>EDAuth</h1></b>

Edevlet uygulama giriş sayfasına yönlendirme ve kullanıcı oturum açımından sonra AuthorizationCode değerinin alınması işlemlerinin yapıldığı yapıdır. Bu yapıda 3 fonksiyon tanımlanmıştır. Bu fonksiyonların açıklaması aşağıdaki gibidir.


<b><h3>RedirectForLogin</h3></b>

Edevlet entegrasyonu için gerekli olan parametreler ile edevlet giriş sayfasına yönlendirilme işlemini yapan fonksiyondur.

<table class="tg">
  <tr>
    <th class="tg-7btt" colspan="3">RedirectForLogin</th>
  </tr>
  <tr>
    <td class="tg-fymr">Parametreler</td>
    <td class="tg-fymr">Parametre Tipi</td>
    <td class="tg-7btt">Açıklama</td>
  </tr>
  <tr>
    <td class="tg-0pky">State</td>
    <td class="tg-0pky">String</td>
    <td class="tg-0pky">Kurum uygulaması tarafından üretilen, güvenlik<br>amaçlı olarak kullanılacak, rastgele bir değerdir</td>
  </tr>
  <tr>
    <td class="tg-0lax">Scope</td>
    <td class="tg-0lax">String</td>
    <td class="tg-0lax">Uygulamanızın erişmek için izin istediği bilgi kümeleri <br>veya gerçekleştirmek istediği işlemlerin sıralandığı listesi.</td>
  </tr>
</table>


<b><h3>GetResponseAuthCode</h3></b>

Edevlet tarafından kullanıcının oturum açması ile tanımlanan kurum sayfasına yönlendirme işlemi gerçekleştirilir. Yönlendirme sayfasında bu fonksiyonun çalıştırılması ile edevletin göndermiş olduğu AuthorizationCode değerini alan fonksiyondur. Parametre almaz. Dönüş tipi <b>EDFunctionResult</b> dir.

<b><h3>GetUrlParameter</h3></b>

Sayfadaki url parametrelerini ismine göre alan fonksiyondur. Dönüş tipi <b>string</b> dir

<table class="tg">
  <tr>
    <th class="tg-hgcj" colspan="3">GetUrlParameter</th>
  </tr>
  <tr>
    <td class="tg-5ua9">Parametreler</td>
    <td class="tg-5ua9">Parametre Tipi</td>
    <td class="tg-5ua9">Açıklama</td>
  </tr>
  <tr>
    <td class="tg-s268">sParam</td>
    <td class="tg-s268">String</td>
    <td class="tg-s268">Url'den parametre değeri alınacak anahtar değeri.</td>
  </tr>
</table>

<b><h1>EDToken</h1></b>

Edevletten alınan AuthorizationCode değerinin kaynak sorgulama için AccessToken değerine dönüştürülmesi işleminin yapıldığı yapıdır. bu işlemi yapan fonksiyon aşağıda tanımlanmıştır.


<b><h3>GetAccessToken</h3></b>

Edevlet üzerinden alınan AuthorizationCode değerini AccessToken'a dönüştürür parametre olarak AuthorizationCode değerini alır.  Dönüş tipi <b>EDFunctionResult</b> dir.

