function starter(){
  $.ajax({
    url:"/api/customers",
    type:"GET",
    success:function(result){
      console.log(result);
    }
  });
}
