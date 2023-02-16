
        function print(event){
            event.preventDefault();
            const userName=document.getElementById('name').value;
            const email=document.getElementById('email').value;
            var phone=document.getElementById('phone').value;
            const date=document.getElementById('date').value;
            const time=document.getElementById('time').value;


            localStorage.setItem('name',userName)
            localStorage.setItem('email',email)
            localStorage.setItem('phone',phone)
            localStorage.setItem('date',date)
            localStorage.setItem('time',time)

        }