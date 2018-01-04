var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+ String.fromCharCode(chr1);if(enc3!=64){output=output+ String.fromCharCode(chr2);}
if(enc4!=64){output=output+ String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+ 1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+ 1);c3=utftext.charCodeAt(i+ 2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}
var encode=document.getElementById('encode'),decode=document.getElementById('decode'),output=document.getElementById('output'),input=document.getElementById('input');var User_ID="";var protected_links="";var a_to_va=0;var a_to_vb=0;var a_to_vc="";function auto_safelink(){auto_safeconvert();}
function auto_safeconvert(){var a_to_vd=window.location.hostname;if(protected_links!=""&&!protected_links.match(a_to_vd)){protected_links+=", "+ a_to_vd;}else if(protected_links=="")
{protected_links=a_to_vd;}
var a_to_ve="";var a_to_vf=new Array();var a_to_vg=0;a_to_ve=document.getElementsByTagName("a");a_to_va=a_to_ve.length;a_to_vf=a_to_fa();a_to_vg=a_to_vf.length;var a_to_vh=false;var j=0;var a_to_vi="";for(var i=0;i<a_to_va;i++)
{a_to_vh=false;j=0;while(a_to_vh==false&&j<a_to_vg)
{a_to_vi=a_to_ve[i].href;if(a_to_vi.match(a_to_vf[j])||!a_to_vi||!a_to_vi.match("http"))
{a_to_vh=true;}
j++;}
if(a_to_vh==false)
{var encryptedUrl=Base64.encode(a_to_vi);a_to_ve[i].href="https://azsoftdownload.blogspot.com/2018/01/azsoftdownload.html?url="+ encryptedUrl;a_to_ve[i].rel="nofollow";a_to_vb++;a_to_vc+=i+":::"+ a_to_ve[i].href+"\n";}}
var a_to_vj=document.getElementById("anonyminized");var a_to_vk=document.getElementById("found_links");if(a_to_vj)
{a_to_vj.innerHTML+=a_to_vb;}
if(a_to_vk)
{a_to_vk.innerHTML+=a_to_va;}}
function a_to_fa()
{var a_to_vf=new Array();protected_links=protected_links.replace(" ","");a_to_vf=protected_links.split(",");return a_to_vf;}
Silahkan kalian cari dan ganti http://www.blog.safelink/2016/04/direct-safelink.html dengan alamat link artikel kalian yang tadi dibuat
Simpan atau Save file di notepad tersebut dengan ekstensi js (javascript), untuk keterangan lebih lanjut silahkan kalian samakan dengan contoh gambar dibawah ini
Cara Lengkap Membuat Blog Safelink Blogger Dengan Benar Work 100%
Setelah itu silahkan kalian upload file javascript tersebut, disini kalian bisa menggunakan bantuan situs yourjavascript ataupun bisa menggunakan situs github.
Tunggu proses upload sampai selesai, setelah itu silahkan kalian ambil atau copy  alamat url javascript tersebut
Dalam kasus ini saya menggunakan bantuan dari situs GitHub, jika kalian belum mengetaui cara daftar dan cara upload menggunakan GitHub, kalian bisa baca artikelnya disini.
Langkah selanjutnya silahkan kalian kembali ke pembuatan artikel tadi, kemudian pastekan atau ganti Kode_Javascript dengan alamat Link Javascript yang sudah kalian upload tadi. Maka secara garis besarnya akan terlihat seperti ini
Cara Lengkap Membuat Blog Safelink Blogger Dengan Benar Work 100%
Sebelum dipublikasikan, agar tidak terdeteksi spam oleh sistem google dan agar tidak kena banned adsense, maka alangkah baiknya kalian masukkan kurang lebih 300 sampai dengan 400 kata artikel lainnya
Cara masuk ke mode Compose kemudian kalian tulisa artikel kalian pada bagian "Tulis artikel kalian disini" . Maka setelah kalian telah membuat artikel maka akan terlihat seperti ini
Cara Lengkap Membuat Blog Safelink Blogger Dengan Benar Work 100%
Jika isi artikel sudah kalian buat, maka silahkan kalian publikasikan artikel tersebut
Sampai disini pembuatan Blog Safelink sudah kalian buat dengan benar
Langkah selanjutnya silahkan kalian masukkan kode dibawah ini tepat dibawah kode <head>, kemudian simpan template kalian.
<!-- mantap -->
<script type='text/javascript'>
var blog = document.location.hostname.split(&quot;.&quot;);
if (blog[blog.length - 1] != &quot;com&quot;) {
var ncr = &quot;http://&quot; + blog[0] + &quot;.blogspot.com/ncr&quot;;
window.location.replace(ncr + document.location.pathname);
}
</script>
Langkah terakhir adalah menggabungkan antara blog safelink dengan blog utama kalian


Cara Menyambungkan Blog Utama Dengan Blog Safelink

Langkah pertama silahkan kalian masuk ke akun blogger utama kalian
Silahkan kalian masuk ke bagian Tata Letak , Pilih Tambahkan Gadget kemudian pilih HTML/Javascript
Langkah selanjutnya kalian copy kode dibawah ini dan letakkan di kotak HTML/Javascript kemudian klik Simpan.
<script type="text/javascript" src="http://yourjavascript.com/21103006175/javascript.js"></script>
<script type="text/javascript">
protected_links = "facebook.com";
auto_safelink();
</script>
http://yourjavascript.com/21103006175/javascript.js silahkan kalian ganti dengan alamat link (URL) javascript yang telah kalian upload tadi
Letakkan HTML/Javascript tadi tepat dibawah gadget pos, atau pastinya seperti gambar dibawah ini
Cara Lengkap Membuat Blog Safelink Blogger Dengan Benar Work 100%
Untuk melihat hasilnya silahkan kalian lihat Di artikel ini,  kemudian coba kalian tekan tombol download
Selesai, semoga bermanfaat untuk kalian semuanya

Video Setting Blog Safelink





Tags :
Cara membuat blog safelink dengan mudah
Cara membuat dan setting blog safelink dengan blog utama
Langkah-langkah membuat blog safelink di blogger
Cara membuat blog safeling menggunakan platform blogger
Cara membuat blog safelink High CTR dan BPK
Cara menaikkan penghasilan adsense dengan Blog Safelink
Cara Membuat Blogger Safelink Paling Mudah


.

 
.
.

 
.
Related Posts :

Cara Membuat dan Memasang Kode Anti Inspect Element DI Blogger
komputerdia.com - Apa itu Inspect Element ? Inspect Element adalah salah satu cara atu metode yang bisa dilakukan untuk bisa mendapatkan su… Read More...
Cara Daftar Akun Github dan Cara Upload File Menggunakan GitHub
komputerdia.com - GitHub merupakan sebuah website yang digunakan untuk mengupload file berupa sebuah kode, baik html, php, css, javascript,… Read More...
Cara Mudah Memasang jQuery Di Blogger
komputerdia.com - Seccara fungsional jQuery adalah adalah suatu kumpulan dari fungsi-fungsi JavaScript yang memudahkan penulisan kode JavaS… Read More...
Cara Mudah Memasang Anti Ad-Block Responsive Di Blogger
komputerdia.com - Tidak bisa dipungkiri lagi bahwa saat ini ad-block merupakan "musuh" terbesar bagi para blogger, terutama bagi mereka yan… Read More...
Cara Membuat Menu Bar Responsive dan Keren Tanpa Edit Html Di Blog
komputerdia.com - Menu navigasi atau Menu bar merupakan penujuk arah yang dipasang pada suatu situs yang ditujukan untuk memudahkan para pe… Read More...
Berlangganan Artikel terbaru (free):


Your email address...

Subscribe

1 Response to "Cara Lengkap Membuat Blog Safelink Blogger Dengan Benar Work 100%"


DELVI METRONOVEMBER 22, 2017
Mantap ni gan. Thanks infonya gan

Salam kenal delvi adri www.waktusantai.com

Reply
Add comment
 
Newer PostOlder PostHome

Direct Link To See All Discussion This Site

 Direct discussion

  Komputer - Jaringan Komputer
  Komputer - Hardware Komputer
  Komputer - Software
  Komputer - Tutorial BIOS
  Komputer - Tutorial Bootable OS
  Komputer - Tutorial General
  Komputer - Tutorial Maintenance

  Android - Basic & Info
  Android - Review
  Android - Install App
  Android - Root, TWRP, CWM, Flash
  Android - Tutorial Trick

  Hacking - Pengenalan & Dasar
  Hacking - Keamanan
  Hacking - Tutorial Hack General
  Hacking - Tutorial Hack Android

  Blogger - Persipan & Setting
  Blogger - Tahap lanjutan
  Blogger - Kumpulan Tutorial


 


