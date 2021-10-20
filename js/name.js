const loginForm = document.querySelector("#login-form");
const logininput = document.querySelector("#login-form input");
const tagA = document.querySelector("#link");
const NameArea = document.querySelector("#userName");
const logOutbtn = document.querySelector("#logout");
// 자주 쓰는 스트링들 상수로 저장
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";
// 로컬스토리지에 username키의 값 가져오기
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 시점은 loginForm => submit 시 발동하는 함수
function onLoginSubmit(event){
    //submit 될 때 특유의 새로고침을 틀어막기
    event.preventDefault();
    //submit할 때 인풋 내용
    const userName = logininput.value;
    loginForm.classList.add(HIDDEN_CLASS);
    // 인풋내용 받아와서 h1 텍스트에 쓰기
    NameArea.innerText = `Hello! ${userName}`;
    // loginForm이 부모라 얘가 뒤로가서 클래스 지워줘야함 (안그러면 씹힘)
    NameArea.classList.remove(HIDDEN_CLASS);

    // 인풋내용 USERNAME_KEY라는 Key의 Value로 인풋내용 넣기
    localStorage.setItem(USERNAME_KEY, userName);  
}

//h1태그에 userName을 꽂고 숨겨진 h1태그를 보이게 한다
function paintGreetings(){
    const userName = localStorage.getItem(USERNAME_KEY);
    NameArea.innerText = `Hello! ${userName}`;
    NameArea.classList.remove(HIDDEN_CLASS);
}


//시점은 load 시- localStorage에 값이 들어 있는지 확인
if(savedUsername === null){
    //저장된 로컬스토리지 아이템이 없다면 숨겨진 Form을 다시 보이게 하고 submit 시 이벤트! 
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    //저장된 로컬스토리지 아이템이 있다면 걔를 그린다
    paintGreetings();
}

function logOut(){
    localStorage.removeItem(USERNAME_KEY);
    window.location.reload();
}
