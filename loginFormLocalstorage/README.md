# VanillaJS

<p>
greeting.innerHTML = `Hello ${userName}`<br>
greeting.innerHTML = "Hello " + userName; 위와 동일한 코드<br>
'' 와 "" 이 아닌 ``(백틱)을 사용해야 함<br>
변수와 string을 결합하고 싶다면 또는 변수를 string안에 넣고 싶다면 ${변수명} 이렇게 표현하면 됨<br>
<br><br>
localstorage : 새로고침해도 입력받은 혹은 저장한 값이 유지되게 하는 것<br>
<br><br>
localStorage.setItem("이름(Key)","저장할 내용(Value)") : 값을 저장하는 법<br>
localStorage.getItem("이름(Key)") : 값을 불러오는 법<br>
localStorage.removeItem("이름(Key)") : 저장한 값을 지우는 법<br>
<br><br>
// 1.15 --------------------------<br>
사용자가 이름을 입력해서 localstorage에 값이 담기게 되면 사용자 이름이 새로고침해도 보이게, (원래는 새로고침을 하면 무조건 다시 form 영역이 나타났었음)<br>
하지만 사용자 이름을 입력하지 않으면 form이 나타나게

</p>
