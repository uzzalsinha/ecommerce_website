let updateBtns = document.getElementsByClassName('update-cart')
for(let i=0; i<updateBtns.length;i++){
    updateBtns[i].addEventListener('click',function(){
        let productId= this.dataset.product
        let action = this.dataset.action
        // console.log('uder:', user)
        // console.log(productId, action)
        if(user ==='AnonymousUser'){
            console.log('Not logged in')
        }else{
            updateCustomerOrder(productId, action)
        }
        
    })
}


function updateCustomerOrder(productId, action){
    console.log('user logged in')
    let url = '/update_product/'
    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken': csrftoken,
        },
        body:JSON.stringify({'productId': productId, 'action': action})
    })
    .then((response) =>{
        return response.json()
    })
    .then((data) =>{
        console.log('data', data)
        location.reload()
    })
}