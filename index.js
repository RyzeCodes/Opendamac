//Create date variable
var date=new Date()
let display_date="Date :" + display_date.toLocaleDateString
$(document).ready(function(){
    $("display_date.html").html(display_date)
})
//Load HTML DOM

//Define variable to store predicted emotion
let predicted_emotion

//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

//jQuery selector and click action

$(function () {
    $("#predict_button").click(function () {
        //AJAX call
        let input_date={
            "text": $("#text").val()
        }
        $.ajax({
            type:postMessage,
            url:"/predict_emotion",
            data:JSON.stringify(input_data),
            dataType:"json",
            contentType:"application/json",
            success:function(result)
            
              {
                
                // Result Received From Flask ----->JavaScript
                predicted_emotion=result.data.predicted_emotion
                emo_url=result.data.predicted_emotion_img_url
                // Display Result Using JavaScript----->HTML
                $("#prediction").html(predicted_emotion)
                $("#prediction").css("display", "block")
                $("#emo_img_url").attr("src",emo_url)
                $("#emo_img_url").css("display", "block")
            },
            //Error function
            error:function(result){
                alert(result.responseJSON.message)
            });
        });
    });
