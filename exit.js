const values = {};

$(document).on("change", "textarea", (e) => {
  var id = e.target.getAttribute("id");

  var value = e.target.value;
values[id] = value;
if (value.length == 0) {
  console.log("not updated");
  delete values[id];
} else {
  console.log("updated");
  values[id] = value;
}
});

const data={
    // text1:'',
    // text2:'',
    // adminremarks:''
   
};

// document.getElementById("accept").addEventListener("click", function (event) {
//     event.preventDefault();
    
    
//     data.text1 = item1.value;
//     data.text2 = item2.value;
//     data.text3 = adminremarks.value;
    
    
//     console.log(item1.value);
//     console.log(item2.value);
//     console.log(adminremarks.value);
    
// });
// without submit button function****
$(document).on('change','#item1,#item2,#adminremarks',(e)=>{
    let tablevalue = e.target.getAttribute('id');
    data[tablevalue]=e.target.value;
  });