// ボタンをクリックした際に、
// テキストボックス内に「クリックしました！」と表示されている


$(function(){
  $('.btn').on('click', function(){
    console.log('111');
    $('[value=""]').val('クリックしました！');
    // $('.text-box').val('クリックしました！');
  });
});
