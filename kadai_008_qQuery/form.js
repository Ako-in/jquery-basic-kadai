// ボタンをクリックした際に、
// テキストボックス内に「クリックしました！」と表示されている


$(function(){
  $('.btn').on('click', function(){
    console.log('111');
    $('.text-box').val('クリックしました！');
  });
});
