// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
$(document).ready(function () {
    $("#map-image").on("click")
    {

    }

    $('#go-to-top').click(function () {
        $('html,body').animate({scrollTop: 0}, 400);
        return false;
    });

    $(".gift-send").click(function () {
        $("#gift-name").text($(this).data("name"));
    })


    $("#reserveGiftButton").click(function () {
        let name = $("#sender-name").val();
        let message = $("#sender-message").val();
        $("#reserveGiftButton").text("전송중...");
        $("#reserveGiftButton").prop("disabled", true);

        emailjs.init("user_yjLL5xG0A3kkOCH5BGIDh");
        emailjs.send("wedding-mail", "gift_send", {
            name: name,
            gift: $("#gift-name").text(),
            message: message
        }).then(function (response) {
            $('#giftMailModal').modal('hide');
            alert(name + "님의 메시지가 정상적으로 전송되었습니다.");

            $("#reserveGiftButton").text("예약하기!");
            $("#sender-name").val('');
            $("#sender-message").val('');
            $("#reserveGiftButton").prop("disabled", false);
        }, function (err) {
            alert("메시지 전송이 실패했습니다. 다시 시도해주세요.");
        });
    })
})

// Smooth scroll for links with hashes
$("a.smooth-scroll").click(function (event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate(
                {
                    scrollTop: target.offset().top
                },
                1000,
                function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                }
            );
        }
    }
});



// 링크 복사
function copyLink(){
	var url = 'https://erik-sunny-wedding.github.io/';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("링크가 복사되었습니다. 널리널리 퍼뜨려주세요💕")
}


// 1. 단순 복사 함수 (가장 에러 없는 방식)
function copyToClipboard(name, account) {
    var textarea = document.createElement("textarea");
    textarea.value = account;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999); // 모바일 대응

    try {
        document.execCommand("copy");
        alert(name + "의 계좌번호가 복사되었습니다.\n" + account);
    } catch (err) {
        alert("복사에 실패했습니다. 직접 입력해 주세요.");
    }

    document.body.removeChild(textarea);
}

// 2. HTML에서 호출하는 함수들 (이름 확인!)
function groomAccountNumber() {
    copyToClipboard("신랑", "00000000 카카오뱅크");
}

function brideAccountNumber() {
    copyToClipboard("신부", "00000000 카카오뱅크");
}

function groomsFatherAccountNumber() {
    copyToClipboard("신랑 아버님", "000-000-000000 은행명");
}

function groomsMotherAccountNumber() {
    copyToClipboard("신랑 어머님", "000-000-000000 은행명");
}

function brideMotherAccountNumber(){
    copyToClipboard("신부 어머님", "000-000-000000 은행명");
}


function toggleFoldable() {
    // 요소를 정확하게 찾습니다.
    var content = document.querySelector('.foldable-content');
    var toggleIcon = document.getElementById('toggleIcon');

    // 현재 상태 확인
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        toggleIcon.innerText = "▲";
    } else {
        content.style.display = "none";
        toggleIcon.innerText = "▼";
    }
}

function toggleFoldable2() {
    var content = document.querySelector('.foldable-content2');
    var toggleIcon = document.getElementById('toggleIcon2');

    // 현재 상태 확인
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        toggleIcon.innerText = "▲";
    } else {
        content.style.display = "none";
        toggleIcon.innerText = "▼";
    }
}

// 카카오톡 공유하기
function kakaoShare() {
    Kakao.init('YOUR APP KEY');
    // SDK 초기화 여부를 판단합니다.
    Kakao.isInitialized();
    //console.log(Kakao.isInitialized());
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
        title: '명준🤍윤선 결혼합니다.',
        description: '2026.10.24\n 오후 12시 서울드래곤시티 랑데뷰홀',
        imageUrl: 'https://github.com/erik-sunny-wedding/erik-sunny-wedding.github.io/blob/main/assets/img/main.jpg?raw=true',
        link: {
            mobileWebUrl: 'https://erik-sunny-wedding.github.io/#!',
            webUrl: 'https://erik-sunny-wedding.github.io/#!',
        },
        },
        buttons: [
        {
            title: '모바일 청첩장 보기',
            link: {
            mobileWebUrl: 'https://erik-sunny-wedding.github.io/#!',
            webUrl: 'https://erik-sunny-wedding.github.io/#!',
            },
        },
        ],
        // 카카오톡 미설치 시 카카오톡 설치 경로이동
        installTalk: true,
    })
}