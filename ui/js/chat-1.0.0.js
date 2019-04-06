$(document).ready(function () {

    $('#chat_head').html('Service Desk Assistant');
    // window.onbeforeunload = savechatHistory;
    if ($("#fab_span").html() == null) {
        var fabSpan = document.createElement('span');
        fabSpan.id = "fab_span";
        fabSpan.setAttribute("Fab", "0");
        document.getElementById("chat_converse").appendChild(fabSpan);
    }
    $('#chat-wrapper').outerHeight($(window).outerHeight());
    $(window).resize(function () {
        $('#chat-wrapper').outerHeight($(window).outerHeight());
    });
    $(".chat").draggable({
        'appendTo': 'body',
        'cursor': 'move',
        'containment': '#chat-wrapper',
        //'cancel': '.chat_converse',
        drag: function (event, ui) {
            $('.chat').css('bottom', 'auto');
        }
    });

    var isFullScreen = false;
    $('.chat_fullscreen_loader').css('display', 'block');
    setChatWindowHeight(isFullScreen);

    $(window).on('resize', function () {
        isFullScreen = checkScreen();
        setChatWindowHeight(isFullScreen);
    });

    $('#prime').click(function () {
        toggleFab();
        if ($('#prime').hasClass('close-img')) {
            $("#fab_span").attr("Fab", "1");
        } else {
            $("#fab_span").attr("Fab", "0");
        }
    });
    $('#chat_minimize_fullscreen_loader').click(function () {
        minimizeFab();
        window.location.reload();
    });

    //Toggle chat and links
    function toggleFab() {
        $('.prime').toggleClass('zmdi-comment-outline');
        $('.prime').toggleClass('zmdi-close');
        $('.prime').toggleClass('is-active');
        $('.prime').toggleClass('is-visible');
        $('#prime').toggleClass('is-float');
        $('.chat').toggleClass('is-visible');
        $('.fab').toggleClass('is-visible');
        var src = GetImageURL(ImageURLS.CloseIcon);
        $('#prime').toggleClass('close-img');
    }

    function minimizeFab() {
        var src = GetImageURL(ImageURLS.CloseIcon); //'images/icon-close.png';
        $('.prime').toggleClass('zmdi-comment-outline');
        $('.prime').toggleClass('zmdi-close');
        $('.prime').toggleClass('is-active');
        $('#prime').removeClass('is-hide');
        $('#prime').toggleClass('is-float');
        $('.chat').removeClass('is-visible');
        $('#prime').toggleClass('close-img');
        $('.fab').toggleClass('is-visible');
    }

    $('#chat_fullscreen_loader').click(function (e) {
        $('.fullscreen').toggleClass('zmdi-window-maximize');
        $('.fullscreen').toggleClass('zmdi-window-restore');
        $('.chat').toggleClass('chat_fullscreen');
        $('.fab').toggleClass('is-hide');
        $('.header_img').toggleClass('change_img');
        $('.img_container').toggleClass('change_img');
        $('.chat_header').toggleClass('chat_header2');
        $('.fab_field').toggleClass('fab_field2');
        $('.chat_converse').toggleClass('chat_converse2');
        isFullScreen = checkScreen();
        setChatWindowHeight(isFullScreen);
    });

    // Chat Admin Message
//    if (document.getElementById("chat_converse").innerText.trim() == "") {
//        ChatAdmin("Hi, 5ow can I help you");
//    }
    // Display the Chat Window on screen load
    if ($("#fab_span").attr("Fab") == "1") {
        toggleFab();
    }
    // Load the result output message
    if ($("#fab_span").attr("LoadMsg") != null) {
        if ($("#fab_span").attr("LoadMsg") == "RES") {
            $("#fab_span").removeAttr("LoadMsg");
            ChatAdmin("We have loaded the page, hope it served your purpose. Thank You!!");
            cntMsg = 12;
        } else {
            cntMsg = Number($("#fab_span").attr("LoadMsg"));
            cntMsg = cntMsg + 1;
        }
    }
    // Scroll the chat window to bottom of the screen
    document.getElementById("chat_converse").scrollTop = document.getElementById("chat_converse").scrollHeight;
});

function checkScreen() {
    if ($('.chat_fullscreen')[0]) {
        isFullScreen = true;
    } else {
        isFullScreen = false;
    }
    return isFullScreen;
}

function setChatWindowHeight(fullscreenflag) {
    var chatHeaderHeight = $('.chat_header').outerHeight();
    var ChatFooterHeight = $('.fab_field').outerHeight();
    var chatBodyHeight = $(window).height() - (chatHeaderHeight + ChatFooterHeight);
    if (fullscreenflag) {
        //$('#chat_converse').css({'max-height': chatBodyHeight, 'overflow-y':'auto'});
        $('#chat_converse').outerHeight(chatBodyHeight - 20);
        $('.chat').css({'bottom': 'auto', 'left': 'auto', 'right': 25, 'top': 10});
        console.log('FS');
    } else {
        //$('#chat_converse').css({'max-height': $(window).outerHeight()/6});
        //$('#chat_converse').outerHeight($(window).outerHeight()/6);
        $('#chat_converse').outerHeight($(window).outerHeight() / 6 * 3);
        $('.chat').css({'bottom': '20', 'height': 'min-content'});
        console.log('NFS');
    }
    document.getElementById("chat_converse").scrollTop = document.getElementById("chat_converse").scrollHeight;
}


var cntMsg = 0;

// Purpose: Chat Admin Message
function ChatAdmin(strMessage) {
    //debugger;
    var MsgAdminSpan = document.createElement('div');
    MsgAdminSpan.className = "chat_msg_item chat_msg_item_admin";
    var MsgAdminDiv = document.createElement('div');
    MsgAdminDiv.className = "chat_avatar";
    var MsgAdminContentDiv = document.createElement('div');
    MsgAdminContentDiv.className = "chat_msg_content_admin";
    var MsgAdminImg = document.createElement("img");
    MsgAdminImg.src = GetImageURL(ImageURLS.AutoReplyIcon); // "images/icon-auto-reply.png"
    MsgAdminDiv.appendChild(MsgAdminImg);
    MsgAdminSpan.appendChild(MsgAdminDiv);
    MsgAdminSpan.appendChild(MsgAdminContentDiv);
    MsgAdminContentDiv.innerHTML = strMessage;
//    MsgAdminSpan.innerHTML = MsgAdminSpan.innerHTML + strMessage;
    document.getElementById("chat_converse").appendChild(MsgAdminSpan);
    document.getElementById("chat_converse").scrollTop = document.getElementById("chat_converse").scrollHeight;
}

// Purpose: Chat User Message
function ChatUser(strMessage) {
    //debugger;
    var MsgUserSpan = document.createElement('div');
    MsgUserSpan.className = "chat_msg_item chat_msg_item_user";
    var MsgUserDiv = document.createElement('div');
    MsgUserDiv.className = "chat_avatar";
    var MsgUserContentDiv = document.createElement('div');
    MsgUserContentDiv.className = "chat_msg_content_user";
    var MsgUserImg = document.createElement("img");
    MsgUserImg.src = GetImageURL(ImageURLS.UserIcon); // "images/icon-auto-reply.png"
    MsgUserDiv.appendChild(MsgUserImg);
    MsgUserSpan.appendChild(MsgUserContentDiv);
    MsgUserSpan.appendChild(MsgUserDiv);
    MsgUserContentDiv.innerHTML = strMessage;
//    MsgUserSpan.innerHTML = strMessage;
    document.getElementById("chat_converse").appendChild(MsgUserSpan);

    //var MsgUserStatusSpan = document.createElement('span');
    //MsgUserStatusSpan.className = "chat_msg_item status";
    //MsgUserStatusSpan.innerHTML = GetCurrentTime();
    //document.getElementById("chat_converse").appendChild(MsgUserStatusSpan);
    //alert(document.getElementById("chat_converse").innerHTML);
    document.getElementById("chat_converse").scrollTop = document.getElementById("chat_converse").scrollHeight;
}

// Purpose: To get the current time
function GetCurrentTime() {
    var date = new Date();
    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var am_pm = date.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours;
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    return hours + ":" + minutes + ":" + seconds + " " + am_pm;
}

// Purpose: To Send the Chat Message on click of the enter key
function SendMessage(e) {
    if (e.keyCode == 13) {
        event.preventDefault();
        if (document.getElementById("chatSend").value.toLowerCase() == "y") {
            window.location.href = "https://www-inova-org-i.caretechweb.com/Physicians/Results.aspx?Gender=M&Language=10000&SearchTerm=Allergy";
            ChatAdmin("We are refining your search, please wait ...");
            document.getElementById("chatSend").value = "";
            return false;
        }
        ChatMessage();
    }
}

// Purpose: Chat Message process
function ChatMessage() {
    if (document.getElementById("chatSend").value.trim() != "") {
        var ChatMsg = document.getElementById("chatSend");
        ChatUser(ChatMsg.value);
        //ChatAdmin("Please wait");
        // var blMsg = SendNewMsg(ChatMsg.value);
        // if (blMsg) {
        // cntMsg = cntMsg + 1;
        // }
        //alert("End");

        // var blMsg = CallSendMsg(cntMsg);
        // if (blMsg) {
        // cntMsg = cntMsg + 1;
        // }
        var blMsg = ShowAdminMessage(ChatMsg.value);
        if (blMsg) {
            cntMsg = cntMsg + 1;
        }

        //ChatSuggestions("test2");
        ChatMsg.value = "";
        return false;
    }
}


function SendNewMsg(userMessage) {
    $.ajax({
        url: 'http://10.165.135.64:8989/api/rest/v1.0/ask?question=' + userMessage + "&userid=" + 123456789,
        type: 'GET',
        dataType: 'json',
        async: true, crossDomain: true,
        //cors
        success: function (response) {
            ChatSuggestions(cntMsg, response[0].response.answer);
            return true;
            //$('#function').val(value[0]);
            //$('#parameter').val(value[1]);

            //$('#seqNumber').val(value[2]);
            //$("#chatWindow").append("<li align= 'left' class='list-group-item list-group-item-primary'>" + value[3] + "</li>");

        },
        error: function (xhr) {
            alert("An error occurred: " + xhr.status + " " + xhr.statusText);
        }
    });
}

// Purpose: Chat suggestions
function ChatSuggestions(idCtrl, strMessage) {
    var str_array = strMessage.split('^');
    var MsgAdminDiv = document.createElement("div");
    MsgAdminDiv.id = idCtrl;
    MsgAdminDiv.className = "custom-tag-wrapper";
    document.getElementById("chatSend").disabled = false;
    for (var i = 0; i < str_array.length; i++) {
        // Trim the excess whitespace.
        str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
        // Add additional code here, such as:
        if (i == 0) {
            //MsgAdminDiv.innerHTML = str_array[0] + "</BR>";
            ChatAdmin(str_array[0]);
        } else {
            if (strMessage.includes("tel:")) {
                var caller = document.createElement('a');
                caller.href = str_array[1];
                caller.click();
            } else {
                var MsgAdminSpan = document.createElement('span');
                MsgAdminSpan.id = i;
                MsgAdminSpan.className = "custom-tag";
                MsgAdminSpan.innerHTML = str_array[i];
                MsgAdminDiv.appendChild(MsgAdminSpan);
                document.getElementById("chatSend").disabled = true;
            }
        }
    }

    document.getElementById("chat_converse").appendChild(MsgAdminDiv);
    document.getElementById("chat_converse").scrollTop = document.getElementById("chat_converse").scrollHeight;
}


function OnSuccess(response) {
    alert(response.d);
}


$(document).on('click', '.custom-tag', function (e) {
    if ($(this).closest('.custom-tag-wrapper').attr('disabled') == "disabled") {
        return false;
    }
    var elem = e.target;
    var currentParent = $(this).closest('.custom-tag-wrapper').attr('id');
    $("#" + currentParent).find('.custom-tag').removeClass('custom-tag-active');
    $(elem).addClass('custom-tag-active');

    $(this).closest('.custom-tag-wrapper').attr('disabled', true);

    handleButtonClick($(elem))
});

function handleButtonClick(elem) {
    $(this).closest('.custom-tag-wrapper').attr('disabled', false);
    document.getElementById("chatSend").disabled = false;
    chatwithBot(elem.attr('sm'), function (data) {
        $.each(data, function (i, messages) {
            ChatAdmin(messages.text);

            if (messages.buttons) {
                Buttons(messages.buttons);
                console.log(messages.buttons)
            }
        })
    })
}

function chatwithBot(message, callback) {
    $.ajax({
        url: 'http://localhost:3322/sendMessage',
        async: true,
        data: {
            userid: "poovarasan",
            agent: 'engl_agent',
            message: message
        },
        success: function (data) {
            callback(data)
        },
        error: function (error) {
            callback(error)
        }
    })
}

function Buttons(buttons) {
    var MsgAdminDiv = $("<div></div>");
    MsgAdminDiv.addClass("custom-tag-wrapper");
    document.getElementById("chatSend").disabled = false;

    $.each(buttons, function (i, btn) {
        var MsgAdminSpan = $('<span></span>');
        MsgAdminSpan.attr("id", i);
        MsgAdminSpan.addClass("custom-tag");
        MsgAdminSpan.html(btn.title);
        MsgAdminSpan.attr('sm', btn.payload)
        MsgAdminDiv.append(MsgAdminSpan);
        document.getElementById("chatSend").disabled = true;
    });
    $("#chat_converse").append(MsgAdminDiv);
    $("#chat_converse").scrollTop($("#chat_converse").scrollHeight);

}


function ShowAdminMessage(message) {
    chatwithBot(message, function (data) {
        //debugger;
        $.each(data, function (i, messages) {
            ChatAdmin(messages.text);

            if (messages.buttons) {
                Buttons(messages.buttons)
                console.log(messages.buttons)
            }
        })
    })
}

function CallSendMsg(cntMsg) {
    var strMsg = "";
    if ($("#fab_span").html() != null) {
        $("#fab_span").attr("LoadMsg", cntMsg);
    }
    $('.chat_msg_item_default').hide();
    if (cntMsg == 0) {
        strMsg = "Can I help you with any of these?1)Find a Doctor 2)Classes & Events";
    } else if (cntMsg == 1) {
        strMsg = "Do you already know your doctor? If not sure, I�ll ask you some medical symptoms and help you find the right specialist.1)Yes, Search Doctor by Name2)Find right specialist for me";
    } else if (cntMsg == 2) {
        ChatAdmin("Sure, I'll help you find the right doctor for you");
        strMsg = "Please tell me the patient's health problem for which you need a doctor?";
    } else if (cntMsg == 3) {
        strMsg = "May I know the age of the patient?";
    } else if (cntMsg == 4) {
        strMsg = "Did you experience this after1)fall/trauma2)playing sports3)rigorous exercise4)trekking or long travel5)none of these";
    } else if (cntMsg == 5) {
        strMsg = "Please select the frequency when you feel knee pain?1)within 24 hours2)few days to weeks3)comes and goes4)been for long time";
    } else if (cntMsg == 6) {
        strMsg = "Are you feeling any other symptoms1)fever2)chills3)fatigue4)abdominal pain5)skin rashes6)multiple joint swelling7)headache8)vomiting9)none of these";
    } else if (cntMsg == 7) {
        strMsg = "Are you enquiring for yourself or someone else?";
    } else if (cntMsg == 8) {
        strMsg = "Do you have a gender preference for the Doctor you want to see? 1)Male2)Female3)No Preference";
    } else if (cntMsg == 9) {
        strMsg = "Do you have a language preference for the Doctor you want to see?";
    } else if (cntMsg == 10) {
        strMsg = "Sorry I am confused, did you mean any of these 1)English2)Spanish3)French4)Latin5)No Preference";
    } else if (cntMsg == 11) {
        window.open("https://services-staging.ctsmartdesk.com/SSP/Admin/FormBuilder/FormEngine/FormEngine.aspx?pid=19&MSPG=AC&urlkey=f82c67ed-e4f3-44b0-935b-c456ae20bd93", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
        ChatAdmin("Thank You, we are refining your search <br/><br/>please wait ...");
        document.getElementById("chatSend").value = "";
        if ($("#fab_span").html() != null) {
            $("#fab_span").attr("LoadMsg", "RES");
        }
        return false;
    } else if (cntMsg == 12) {
        strMsg = "Can I help you with any of these?1)Find a Doctor 2)Classes & Events";
    } else if (cntMsg == 13) {
        strMsg = "Are you looking for any specific classes?";
    } else if (cntMsg == 14) {
        ChatAdmin("No problem, I will help you find the right category.");
        strMsg = "What area do you intent to improve by attending this class?";
    } else if (cntMsg == 15) {
        strMsg = "Are you looking for any of the following categories?1)Fitness2)Health & Wellness Classes3)Weight Loss4)Women's Health5)Men's Health";
    } else if (cntMsg == 16) {
        strMsg = "Do you have a date preference?";
    } else if (cntMsg == 17) {
        strMsg = "Did you mean any of thsese1)Today2)Any day within this week3)Next week4)After two days";
    } else if (cntMsg == 18) {
        window.location.href = "https://www-inova-org-i.caretechweb.com/creg/?CategoryID=37";
        ChatAdmin("Thank You, we are refining your search <br/><br/>please wait ...");
        document.getElementById("chatSend").value = "";
        if ($("#fab_span").html() != null) {
            $("#fab_span").attr("LoadMsg", "RES");
        }
        return false;
    }
    for (var i = 0; i < 15; i++) {
        strMsg = strMsg.replace(i + ')', '^');
    }
    if (strMsg != "") {
        ChatSuggestions(cntMsg, strMsg);
        return true;
    } else {
        return false;
    }
}

var counterForUnlock = 0;
var counterForAgent = 0;
var counterForForms = 0;
var processComplete = 0;
var feedbackCounter = 0;
var isADUnlock = 0;
var isADReset = 0;
var isPeoplesoftUnlock = 0;
var isPeoplesoftReset = 0;
var isFinalprocess = 0;
var loading = false;
var isEpicPasswordReset = 0;
var isEpicActivateAccount = 0;
var epicConversationCount = 0;
var ADUnlockCount = 0;
var ADResetCount = 0;

var randomFixedInteger = function (length) {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1));
};

function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}


function searchKeyWord(keyWord, msgCallback) {
    var apiParams = {};
    var clientCode = 'CTS';


    var searchedtext = '';
    if (counterForUnlock > 0 && counterForAgent < 5) {
        if (keyWord.includes("OTHER") || keyWord.includes("NON") || keyWord == "NAN" || keyWord == "NONE") {
            counterForUnlock = 0;
            searchedtext = "Sorry, How can I help you?";
            counterForAgent = counterForAgent + 1;
        } else if (keyWord == "AD ACCOUNT UNLOCK" || keyWord.includes("D ACCOUNT UNLOCK")) {
            isADUnlock = 1;

            ChatAdmin("Sure! I will help you");

            setTimeout(function () {
                msgCallback('Please enter your username')
            }, 2000);
            ADUnlockCount = 1;
            return;
        } else if (isADUnlock === 1) {

            if (ADUnlockCount === 1) {
                if (keyWord === 'JOELPAUL') {

                    setTimeout(function () {

                        ChatAdmin('We have found a matching record. Please wait while we unlock your account…');

                        setTimeout(function () {
                            ChatAdmin('Your account has been unlocked.');

                            setTimeout(function () {
                                ChatSuggestions(cntMsg, "Can I help you with anything else? ^Yes ^No");
                                processComplete = 0;
                                isFinalprocess = 1;

                                ADUnlockCount = 0;
                                isADUnlock = 0
                            }, 2000)
                        }, 3000);
                    }, 3000);


                    return;
                } else {

                    setTimeout(function () {
                        msgCallback('Sorry, we have no record with this name. Are you sure you have entered your username correctly?^Yes^No');
                        ADUnlockCount = 2;
                    }, 2500);

                    return;
                }
            }

            if (ADUnlockCount === 2) {
                if (keyWord === 'YES') {

                    setTimeout(function () {
                        msgCallback('Sorry, I am unable to help further. Do you want an agent to resolve this?^Yes^No');
                        ADUnlockCount = 10;
                    }, 2000);

                    return;
                } else {
                    setTimeout(function () {
                        msgCallback('Do you want to enter the username again?^Yes^No');
                        ADUnlockCount = 3;
                    }, 1000);

                    return
                }
            }


            if (ADUnlockCount === 3) {
                if (keyWord === 'YES') {
                    msgCallback('Please enter your username');
                    ADUnlockCount = 1;
                    return;
                }
            }

            if (ADUnlockCount === 10) {
                if (keyWord === 'YES') {
                    setTimeout(function () {
                        ChatAdmin(' I will need some basic information.');

                        setTimeout(function () {
                            msgCallback('Please enter your date of birth.');
                            ADUnlockCount = 11;
                        }, 2000)
                    }, 2000);

                } else {
                    setTimeout(function () {
                        ChatAdmin("Sorry, I can't proceed further.");

                        setTimeout(function () {
                            ChatSuggestions(cntMsg, "Can I help you with anything else? ^Yes ^No");
                            processComplete = 0;
                            isFinalprocess = 1;

                            ADUnlockCount = 0;
                            isADUnlock = 0
                        }, 2000)
                    }, 3000);
                }
                return;
            }
            if (ADUnlockCount === 11) {

                setTimeout(function () {
                    msgCallback('Please enter the last four digits of your Social Security Number');
                    ADUnlockCount = 12;
                }, 2000);
                return
            }


            if (ADUnlockCount === 12) {
                setTimeout(function () {
                    msgCallback('Please enter your contact phone number');
                    ADUnlockCount = 13;
                }, 2000);

                return;
            }

            if (ADUnlockCount === 13) {
                setTimeout(function () {
                    msgCallback('Please enter the best time to contact you.');
                    ADUnlockCount = 14;
                }, 2000);
                return;
            }

            if (ADUnlockCount === 14) {
                setTimeout(function () {
                    ChatAdmin('Thanks, that’s all we need');
                    setTimeout(function () {
                        msgCallback('An agent will get back to you to resolve the issue.');
                        setTimeout(function () {
                            ChatSuggestions(cntMsg, "Can I help you with anything else? ^Yes ^No");
                            processComplete = 0;
                            isFinalprocess = 1;

                            ADUnlockCount = 0;
                            isADUnlock = 0
                        }, 2000)
                    }, 2000);
                }, 3000);

                return;
            }


            //
            // apiParams.username = keyWord;
            // apiParams.client = clientCode;
            // ChatAdmin("Please wait...we are running the AD account unlock process");
            //
            // loading = true;
            //
            // APIWithCallback("CHATBOT_AD_ACCOUNT_UNLOCK", keyWord, apiParams, function (success, data) {
            //     if (success) {
            //         searchedtext = "We have unlocked your account."
            //     } else {
            //         searchedtext = "Sorry, there was some issue in unlocking the account. Please try after sometime."
            //     }
            //     processComplete = 1;
            //     counterForUnlock = 0;
            //     isADUnlock = 0;
            //
            //     msgCallback(searchedtext);
            //
            //     ChatSuggestions(cntMsg, "Can I help you with anything else? ^Yes ^No");
            //     processComplete = 0;
            //     isFinalprocess = 1;
            //
            // })

        } else if (keyWord.includes("PEOPLE") && keyWord.includes("UNLOCK")) {
            isPeoplesoftUnlock = 1;
            searchedtext = "Please enter the Username";
        } else if (isPeoplesoftUnlock == 1) {

            ChatAdmin("Please wait...we are running the Peoplesoft account unlock process....");

            apiParams.username = keyWord;
            apiParams.uid = keyWord;
            loading = true;
            APIWithCallback("CHATBOT_PEOPLESOFT_ACCOUNT_UNLOCK", keyWord, apiParams, function (success, data) {
                if (success) {
                    mm = JSON.parse(data.message);
                    if (mm['Out_Status'] == "SUCCESS") {
                        searchedtext = "We have unlocked your account."
                    } else if (mm['Out_Status'].includes("Account was not Locked")) {
                        searchedtext = "This account is already unlocked."
                    }
                } else {
                    searchedtext = "Sorry, there was some issue in unlocking the account. Please try after sometime."
                }
                processComplete = 1;
                counterForUnlock = 0;
                isPeoplesoftUnlock = 0;

                msgCallback(searchedtext);

                ChatSuggestions(cntMsg, "Can I help you with anything else? ^Yes ^No");
                processComplete = 0;
                isFinalprocess = 1;

            })
        } else if (keyWord == "AD PASSWORD RESET" || keyWord.includes("D PASSWORD RESET")) {
            isADReset = 1;
            ChatAdmin("Sure! I will help you");

            setTimeout(function () {
                msgCallback('Please enter your username')
            }, 2000);
            ADResetCount = 1;
            return;
        } else if (isADReset === 1) {

            if (ADResetCount === 1) {

                if (keyWord === 'JOELPAUL') {

                    setTimeout(function () {

                        ChatAdmin('We have found a matching record. To proceed, we need to verify your identity')

                        setTimeout(function () {
                            msgCallback('Enter your badge ID');
                            ADResetCount = 4
                        }, 2000)

                    }, 3000)

                } else {
                    setTimeout(function () {
                        ChatAdmin('Sorry, we have no record with this name');


                        setTimeout(function () {
                            msgCallback('Can you enter your badge ID?');
                            ADResetCount = 2;
                        }, 2000);

                    }, 2500);
                }

                return;
            }


            if (ADResetCount === 2) {
                setTimeout(function () {
                    ChatAdmin('Thanks! The badge ID is found, but we need more information to verify your identity');

                    setTimeout(function () {
                        msgCallback('Would you be willing to provide your date of birth and last four digits of your Social Security Number?^Yes^No')
                    }, 2000);

                    ADResetCount = 3;
                }, 2000);

                return;
            }

            if (ADResetCount === 3) {
                setTimeout(function () {
                    msgCallback('Sorry, I am unable to help further. Do you want an agent to resolve this?^Yes^No')
                    ADResetCount = 12;
                }, 2000);
                return;
            }

            if (ADResetCount === 4) {
                setTimeout(function () {
                    ChatAdmin('Your badge ID has been verified. Please wait while we reset your password')

                    setTimeout(function () {
                        ChatAdmin('Your password has been reset successfully')

                        setTimeout(function () {
                            msgCallback('Please enter your alternative email ID');
                            ADResetCount = 5;
                        }, 2000);
                    }, 2000);
                }, 3000)
                return;
            }
            if (ADResetCount === 5) {
                setTimeout(function () {
                    ChatAdmin('Your temporary password has been sent to the alternative email ID');

                    setTimeout(function () {
                        msgCallback("Can I help you with anything else? ^Yes ^No");
                        processComplete = 0;
                        isFinalprocess = 1;

                        ADResetCount = 0;
                        isADReset = 0
                    }, 3000)
                }, 2000);
                return;
            }


            if (ADResetCount === 10) {
                if (keyWord === 'YES') {
                    setTimeout(function () {
                        ChatAdmin(' I will need some basic information.');

                        setTimeout(function () {
                            msgCallback('Please enter your date of birth.');
                            ADResetCount = 11;
                        }, 2000)
                    }, 2000);

                } else {
                    setTimeout(function () {
                        ChatAdmin('Sorry , I can`t proceed further.');

                        setTimeout(function () {
                            ChatSuggestions(cntMsg, "Can I help you with anything else? ^Yes ^No");
                            processComplete = 0;
                            isFinalprocess = 1;

                            ADResetCount = 0;
                            isADUnlock = 0
                        }, 2000)
                    }, 3000);
                }
                return;
            }
            if (ADResetCount === 11) {

                setTimeout(function () {
                    msgCallback('Please enter the last four digits of your Social Security Number');
                    ADResetCount = 12;
                }, 2000);
                return
            }


            if (ADResetCount === 12) {
                setTimeout(function () {
                    msgCallback('Please enter your contact phone number');
                    ADResetCount = 13;
                }, 2000);

                return;
            }

            if (ADResetCount === 13) {
                setTimeout(function () {
                    msgCallback('Please enter the best time to contact you.');
                    ADResetCount = 14;
                }, 2000);
                return;
            }

            if (ADResetCount === 14) {
                setTimeout(function () {
                    ChatAdmin('Thanks, that’s all we need');
                    setTimeout(function () {
                        msgCallback('An agent will get back to you to resolve the issue.');
                        setTimeout(function () {
                            ChatSuggestions(cntMsg, "Can I help you with anything else? ^Yes ^No");
                            processComplete = 0;
                            isFinalprocess = 1;

                            ADResetCount = 0;
                            isADReset = 0
                        }, 2000)
                    }, 2000);
                }, 3000);

                return;
            }


            // apiParams.username = keyWord;
            // apiParams.client = clientCode;
            // apiParams.newpassword = randomFixedInteger(4) + "Welcome$";
            //
            // ChatAdmin("Please wait...we are running the AD password reset process....");
            //
            // loading = true;
            //
            // APIWithCallback("CHATBOT_AD_ACCOUNT_PASSWORD_RESET", keyWord, apiParams, function (success, data) {
            //
            //     if (success) {
            //         searchedtext = "We have sent an email to you with the new password."
            //     } else {
            //         searchedtext = "Sorry, there was some issue in resetting the password. Please try after sometime."
            //     }
            //     processComplete = 1;
            //     counterForUnlock = 0;
            //     isADReset = 0;
            //
            //     msgCallback(searchedtext);
            //
            //     ChatSuggestions(cntMsg, "Can I help you with anything else? ^Yes ^No");
            //     processComplete = 0;
            //     isFinalprocess = 1;
            //
            //
            // })
        } else if (keyWord.includes("PEOPLE") && keyWord.includes("RESET")) {
            isPeoplesoftReset = 1;
            searchedtext = "Please enter the Username";
        } else if (isPeoplesoftReset == 1) {
            apiParams.username = keyWord;
            apiParams.uid = keyWord;


            ChatAdmin("Please wait...we are running the Peoplesoft password reset process....");
            loading = true;
            APIWithCallback("CHATBOT_PEOPLESOFT_ACCOUNT_PASSWORD_RESET", keyWord, apiParams, function (success, data) {
                if (success) {
                    apiParams.username = "Test.User";
                    apiParams.user = "Test.User";
                    SEND_EMAIL(apiParams);
                    searchedtext = "We have sent an email to you with the new password."
                } else {
                    searchedtext = "Sorry, there was some issue in resetting the password. Please try after sometime."
                }
                processComplete = 1;
                counterForUnlock = 0;
                isPeoplesoftReset = 0;

                msgCallback(searchedtext);

                ChatSuggestions(cntMsg, "Can I help you with anything else? ^Yes ^No");
                processComplete = 0;
                isFinalprocess = 1;


            })

        } else if (isEpicPasswordReset == 1) {
            if (epicConversationCount == 1) {
                epicConversationCount = 2;
                msgCallback("Please enter date of birth.");
                return;
            }
            if (epicConversationCount == 2) {
                epicConversationCount = 3;
                msgCallback("Enter home address with zip code");

                return;
            }
            if (epicConversationCount == 3) {
                ChatAdmin("That`s all I need. Please wait while I reset the EPIC password...");
                loading = true;

                setTimeout(function () {

                    processComplete = 1;
                    counterForUnlock = 0;
                    isEpicPasswordReset = 0;

                    ChatAdmin("Password has been reset.");
                    msgCallback("I have sent an email to you with the new password");

                    setTimeout(function () {
                        ChatSuggestions(cntMsg, "Can I help you with anything else? ^Yes ^No");
                        processComplete = 0;
                        isFinalprocess = 1;
                    }, 3000)


                }, 3000);


                return;
            }
        } else if (keyWord.includes('EPIC') && keyWord.includes('PASSWORD')) {
            msgCallback("Sure. I will need some basic information to help you with this.");

            setTimeout(function () {
                isEpicPasswordReset = 1;
                msgCallback("Please enter first name followed by last name.");
                epicConversationCount = 1
            }, 3000);
            return;

        } else if (isEpicActivateAccount == 1) {
            if (epicConversationCount == 1) {
                epicConversationCount = 2;
                msgCallback("Please enter date of birth.");
                return;
            }
            if (epicConversationCount == 2) {
                epicConversationCount = 3;
                msgCallback("Please enter home address with zip code");

                return;
            }
            if (epicConversationCount == 3) {

                ChatAdmin("That`s all I need. Please wait while I activate the EPIC account...");
                loading = true;

                setTimeout(function () {

                    processComplete = 1;
                    counterForUnlock = 0;
                    isEpicPasswordReset = 0;

                    msgCallback("Account has been activated.");
                    //msgCallback("We have sent an email to you with the new password")
                    setTimeout(function () {
                        ChatSuggestions(cntMsg, "Can I help you with anything else? ^Yes ^No");
                        processComplete = 0;
                        isFinalprocess = 1;

                    }, 5000);

                }, 3000);


                return;
            }
        } else if (keyWord.includes('EPIC') && keyWord.includes('ACTIVATE')) {
            ChatAdmin("Sure. I will need some basic information to help you with this.");

            setTimeout(function () {
                isEpicActivateAccount = 1;
                msgCallback("Please enter first name followed by last name.");
                epicConversationCount = 1
            }, 3000);

            return;
        }
    } else if (
        keyWord.includes("ACCOUNT") ||
        keyWord.includes("UNLOCK") ||
        keyWord.includes("RESET") ||
        keyWord.includes("PASSWORD") ||
        keyWord.includes("PWD") ||
        keyWord.includes("PEOPLESOFT") ||
        keyWord.includes("CREDENTIALS") ||
        keyWord.includes("EPIC") ||
        keyWord.includes("LOCKED") ||
        keyWord.includes("ACTIVE DIRECTORY") ||
        keyWord.includes("AD")
    ) {
        if (keyWord.includes("ACTIVE DIRECTORY") || keyWord.includes("AD")) {
            searchedtext = "Did you mean any of these? 1)AD Account Unlock 2)AD Password Reset 3)None";
            counterForUnlock = counterForUnlock + 1;
        } else if (keyWord.includes("PEOPLESOFT")) {
            searchedtext = "Did you mean any of these? 1)PeopleSoft Account Unlock 2)PeopleSoft Password Reset 5)None";
            counterForUnlock = counterForUnlock + 1;
        } else if (keyWord.includes("EPIC")) {

            setTimeout(function () {
                msgCallback("Sure. Did you mean any of these? 1)EPIC Reset Password 2)EPIC Activate Account");
                counterForUnlock = counterForUnlock + 1;
            }, 3000);

            return;
        } else {
            searchedtext = "Did you mean any of these? 1)AD Account Unlock 2)Peoplesoft Account Unlock 3)AD Password Reset 4)Peoplesoft Password Reset 5)None";
            counterForUnlock = counterForUnlock + 1;
        }
    }
    if (counterForForms > 0 && counterForAgent < 5) {
        if (keyWord.includes("OTHER") || keyWord.includes("NON") || keyWord == "NAN" || keyWord == "NONE") {
            counterForForms = 0;
            searchedtext = "Sorry, How can I help you?";
            counterForAgent = counterForAgent + 1;
        } else if (keyWord == "TONER REQUEST" || keyWord.includes('TONER')) {
            CallTonnerForm();
            //searchedtext = "We have opened a Form, kindly fill in the details and submit to raise a Toner request.";
            searchedtext = "Your page has been loaded.";
            processComplete = 1;
            counterForForms = 0;
        } else if (keyWord == "PRINTER QUOTE REQUEST") {
            CallPrinterForm();
            //searchedtext = "We have opened a Form, kindly fill in the details and submit to raise a quote for Printer.";
            searchedtext = "Your page has been loaded.";
            processComplete = 1;
            counterForForms = 0;
        } else if (keyWord == "PRINTER OR SCANNER INCIDENT") {
            CallPrinterIncidentForm();
            //searchedtext = "We have opened a Form, kindly fill in the details and submit to raise a ticket for Printer or Scanner issues.";
            searchedtext = "Your page has been loaded.";
            processComplete = 1;
            counterForForms = 0;
        } else if (keyWord == "TELEPHONE PROBLEM TICKET" || keyWord.includes('TELEPHONE')) {
            CallTelephoneForm();
            //searchedtext = "We have opened a Form, kindly fill in the details and submit to raise a ticket for Telephone issues.";
            searchedtext = "Your page has been loaded.";
            processComplete = 1;
            counterForForms = 0;
        }
    } else if (keyWord.includes("PRINTER") || keyWord.includes("TONER") || keyWord.includes("TELEPHONE") || keyWord.includes("PHONE")) {

        if (keyWord.includes('TONER')) {
            CallTonnerForm();
            //searchedtext = "We have opened a Form, kindly fill in the details and submit to raise a Toner request.";
            searchedtext = "Your page has been loaded.";
            processComplete = 1;
            counterForForms = 0;
        } else if (keyWord.includes("PHONE") || keyWord.includes("TELEPHONE")) {
            CallTelephoneForm();
            //searchedtext = "We have opened a Form, kindly fill in the details and submit to raise a quote for Printer.";
            searchedtext = "Your page has been loaded.";
            processComplete = 1;
            counterForForms = 0;
        } else if (keyWord.includes("SCANNER")) {
            CallPrinterIncidentForm();
            //searchedtext = "We have opened a Form, kindly fill in the details and submit to raise a quote for Printer.";
            searchedtext = "Your page has been loaded.";
            processComplete = 1;
            counterForForms = 0;
        } else {
            searchedtext = "Did you mean any of these? 1)Toner Request 2)Printer Quote Request 3)Printer or Scanner Incident 4)Telephone Problem Ticket 5)None";
            counterForForms = counterForForms + 1;
        }
    }

    if (feedbackCounter > 0 && counterForAgent < 5) {
        if (keyWord == "YES" && feedbackCounter == 1) {
            searchedtext = "Did I resolve your problem? 1)Yes 2)No 3)Maybe 4)Partially 5)Not Really 6)Failed to Respond";
            feedbackCounter = feedbackCounter + 1;
        } else if ((keyWord == "NO" || keyWord == "NOPE") && feedbackCounter == 1) {
            searchedtext = "No Problem!";

            setTimeout(function () {
                ChatAdmin("Have a great day!");

                setTimeout(function () {
                    $('#chat_minimize_fullscreen_loader').trigger('click');
                }, 3500);
            }, 2000);

            feedbackCounter = 0;
        } else if (feedbackCounter == 2) {
            searchedtext = "How was your experience interacting with me? 1)Excellent 2)Good 3)Need to Improve 4)Bad";
            feedbackCounter = feedbackCounter + 1;
        } else if (feedbackCounter == 3) {
            searchedtext = "Any other recommendations?";
            feedbackCounter = feedbackCounter + 1;
        } else if (feedbackCounter == 4) {
            searchedtext = "Thank you for your feedback!";
            setTimeout(function () {
                $('#chat_minimize_fullscreen_loader').trigger('click');
            }, 3000);
            feedbackCounter = 0;
        }
    }


    if (searchedtext == '' && !loading) {
        searchedtext = "Sorry I am a bit confused, but I can help you with the following tasks 1)AD Account Unlock 2)Peoplesoft Account Unlock 3)AD Password Reset 4)Peoplesoft Password Reset 5)None";
        counterForAgent = counterForAgent + 1;
        counterForUnlock = counterForUnlock + 1;
    }

    if (counterForAgent > 4) {
        searchedtext = "Transferring to an agent... 1)tel:09176955850";
    }
    if (processComplete == 1) {
        ChatAdmin(searchedtext);
        searchedtext = "Can I help you with anything else?1)Yes 2)No";
        processComplete = 0;
        isFinalprocess = 1;
    } else if (isFinalprocess == 1) {
        if (keyWord == "NO" || keyWord == "NOPE") {
            searchedtext = "Would you be willing to provide a quick feedback? 1)Yes 2)No";
            feedbackCounter = 1;
        } else {
            searchedtext = "How can I help you?"
        }
        isFinalprocess = 0;
    }

    msgCallback(searchedtext);
}


function SEND_EMAIL(params) {
    var username = params.username;
    APIGateWay("CHATBOT_RESET_EMAL", username, params)
}

function APIWithCallback(_templateCode, username, params, callback) {
    //declaration for api request
    var inputData, apiParams, templateCode, URL;

    //holds data object
    inputData = {};

    //data parameters
    apiParams = params;

    // Api URL
    //URL = 'http://10.1.35.29/SSP_SURVEY/api/Common/GetWebApiData';
    URL = 'https://services-staging.ctsmartdesk.com/SSP/api/Common/GetWebApiData';

    //default param values
    inputData.TemplateCode = _templateCode;
    inputData.AccountId = 1;
    inputData.ParamData = JSON.stringify(apiParams);

    var isuccess = false;
    //invoke
    $.ajax({
        url: URL,
        method: 'POST',
        data: inputData,
        success: function (data) {
            if (data != null) {
                isuccess = true;
                callback(isuccess, data)
            } else {
                callback(false, {})
            }
        }
    });

    //callback(isuccess)
}


// gateway Ajax service for the chat bot service

function APIGateWay(_templateCode, username, params) {
    //declaration for api request
    var inputData, apiParams, templateCode, URL;

    //holds data object
    inputData = {};

    //data parameters
    apiParams = params;

    //API URL
    //URL = 'http://10.1.35.29/SSP_SURVEY/api/Common/GetWebApiData';

    URL = 'https://services-staging.ctsmartdesk.com/SSP/api/Common/GetWebApiData';

    //default param values
    inputData.TemplateCode = _templateCode;
    inputData.AccountId = 1;
    inputData.ParamData = JSON.stringify(apiParams);

    var isuccess = false;
    //invoke
    $.ajax({
        url: URL,
        method: 'POST',
        data: inputData,
        async: false,
        success: function (data) {
            if (data != null)
                isuccess = true;
        }
    });

    return isuccess;
}


function CallTonnerForm() {

    window.open("https://services-staging.ctsmartdesk.com/SSP/Admin/FormBuilder/FormEngine/FormEngine.aspx?pid=19&MSPG=AC&urlkey=f82c67ed-e4f3-44b0-935b-c456ae20bd93", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=500,height=500");
    return false;
}

function CallPrinterForm() {

    window.open("https://services-staging.ctsmartdesk.com/SSP/Admin/FormBuilder/FormEngine/FormEngine.aspx?pid=55&MSPG=AC&urlkey=f82c67ed-e4f3-44b0-935b-c456ae20bd93", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=500,height=500");
    return false;
}

function CallPrinterIncidentForm() {

    window.open("https://services-staging.ctsmartdesk.com/SSP/Admin/FormBuilder/FormEngine/FormEngine.aspx?pid=44&MSPG=AC&urlkey=f82c67ed-e4f3-44b0-935b-c456ae20bd93", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=500,height=500");
    return false;
}

function CallTelephoneForm() {

    window.open("https://services-staging.ctsmartdesk.com/SSP/Admin/FormBuilder/FormEngine/FormEngine.aspx?pid=45&MSPG=AC&urlkey=f82c67ed-e4f3-44b0-935b-c456ae20bd93", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=500,height=500");
    return false;
}


/*  Speech to Text */
function startListening() {
    var recognition = new (webkitSpeechRecognition || SpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.start();

    [
        'onaudiostart',
        'onaudioend',
        'onend',
        'onerror',
        'onnomatch',
        'onresult',
        'onsoundstart',
        'onsoundend',
        'onspeechend',
        'onstart'
    ].forEach(function (eventName) {
        recognition[eventName] = function (e) {
            console.log(eventName, e);
        };
    });
    $(document).find('#fab_speech i').addClass('zmdi-mic active').removeClass('zmdi-mic-outline');
    recognition.onend = function () {
        $('#chat_converse').animate({scrollTop: $('#chat_converse').get(0).scrollHeight});
    };
    recognition.onresult = function () {
        //document.querySelector('#chat_converse').textContent = event.results[0][0].transcript;
        var result = event.results[0][0].transcript;
        if (counterForForms == 0 && counterForUnlock == 0) {
            ChatUser(result);
        }
        var msg = ShowAdminMessage(result);
        if (msg)
            cntMsg = cntMsg + 1;
        $(document).find('#fab_speech i').removeClass('zmdi-mic active').addClass('zmdi-mic-outline');
    };
}

// Provides location objects
var URLUtility = {
    RootPath: '',
    VirtualPath: '/ServiceFocus' // must starts with slash
};


// Holds resource (image) urls
var ImageURLS = {
    CloseIcon: '/Images/Chatbot/icon-close.png',
//    AutoReplyIcon: '/Images/Chatbot/icon-auto-reply.png'
    AutoReplyIcon: 'img/icon-auto-reply.png',
    UserIcon: 'img/icon-user.png'
};


// Wrapper method to get the virtual url of the image 
function GetImageURL(imagePath) {
//    return URLUtility.VirtualPath + imagePath;
    return imagePath;
}

