Edevlet kullannıcı login üzerinden kullanıcı girişi yapılması ve oturum açan kullanıcının bilgilerinin alınmasını sağlayan JavaScript Uygulaması.

<b><h3>EDConfiguration</h3></b>

Entegrasyon yapacak kurumun entegrasyonda kullanılacak parametrelerinin tanımlamasının yapıldığı yapıdır. Entegrasyonda kullanılan tanımlamalar aşağıdaki gibidir. 

<ul>
  <li><b>ClientId : </b> Edevlet entegrasyonunda kullanılmak üzere kuruma verilmiş istemci Id dir.</li>
  <li><b>ClientSecret : </b> Kurum uygulaması için belirlenmiş olan gizli anahtar değeridir.</li>
  <li><b>RedirectUri : </b> Login işleminden sonra yönlendirilecek web sayfası.</li>
</ul>

<b><h3>EDFunctionResult</h3></b>

EDevlet entegrasyonundan dönen sonucu tutulduğu yapıdır.

<ul>
  <li><b>Success : </b> İşlemin başarılı olup olmadığı bilgisini tutar</li>
  <li><b>ErrorMessage : </b> İşlem başarısız ise hata mesajı bilgisini tutar</li>
  <li><b>AuthorizationCode : </b> Edevlette oluşturulan AuthorizationCode değerini tutar.</li>
  <li><b>AccessToken : </b> Edevlette oluşturulan AccessToken değerini tutar.</li>
</ul>
