<h1>Bilinmesi gerekenler</h1>

1- store: uygulamanın bütün bileşenleri tarafından erişilebilen ve değiştirilebilen merkezi state.

2-action: store' u güncellemek için reducer'a gönderdiğimiz haber

--2 değere sahip objedir.
-- type: eylemin görevi neyse onu tanımlamamız gerek( "addTodo" | "removeTodo")
-- payload: reducera eylem gönderirken yanında eylem ile alakalı veriyi gönderdiğimiz değer.

3- dispatch: eylemlerin gerçekleştiğini reducera haber vermemizi sağlayan metot.

4- reducer : gönderilen aksiyonları type değerlerine göre analiz edip store u günceller.

5- subscribe: redux, uygulama durumunu merkezi bir depoda(store) saklar. Bileşenlerin bu duruma erişmesi gerektiğinde useSelector kancası kullanılır.

<h1>Kurulum</h1>

-redux react-redux paketleri indirilir
-store oluşturulur.
-storeda kullanılacak reducer oluşturulur.
-store proje'ye tanıtılır.
