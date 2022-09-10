# momentum
-----

작업기간: 220829 - 220911

사용언어: Javascript, HTML, CSS

-----


Javascript를 이용한 크롬 앱 momentum 클론코딩
-----

참고 : https://nomadcoders.co/

- background.js 

배경이미지 랜덤으로 로딩

Math.random, Math.floor 기능을 사용

- login.js

submit event가 발생할 시, localstorage에 유저 정보 저장

유저 정보 저장 유무에 따라 기존의 form을 hidden, 이후 greeting message를 보이게 함

logout 버튼을 누를 시 유저 정보 삭제, greeting message를 다시 hidden으로 설정

- clock.js

Date 객체를 사용하여 시간 & 분 표현

setInterval을 사용해서 분이 바뀔 때마다 시간이 바뀌게 표현

시계 위에 마우스 오버시 시계가 확대됨

- weather.js

openweathermap의 API를 사용하여 실시간 위치, 날씨, 기온 정보를 표현

- todo.js

유저로부터 submit된 value를 localstorage에 string화한 객체(id와 todo)배열로 저장

localstorage에 저장된 정보의 유무로 li 표현 -> 페이지가 다시 로딩되어도 남아있음

li의 추가 및 삭제 기능

- quote.js

10개의 인용문구중 하나를 랜덤으로 로딩

마우스 오버시 확대됨

페이지의 밑에 고정되어있음
