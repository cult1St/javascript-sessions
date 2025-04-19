

function calculate_grade(value, grade_input){
    var graded = document.getElementById(grade_input);
    if(value < 0){
        alert("Value Should Not Be less than 0");
        graded.value = "NAN";
        return;
    }
    if(value > 100){
        alert("Value Should Not Be Greater Than 100. Please Give Us An Exact Figure")
        graded.value = "NAN";
        return;
    }

   graded.value = calc_grade(value);
}

function calc_grade(value){
    if(value < 40){
       return "F";
    }else if(value >= 40 && value < 45){
        return "E";
    }else if(value >= 45 && value < 50){
        return "D";
    }else if(value >= 50 && value < 60){
        return "C";
    }else if(value >= 60 && value < 70){
       return "B";
    }else{
        return "A";
    }
}
function calculate_result(){
    var scores_ids = ["maths_score", "english_score", "chemistry_score", "physics_score", "biology_score"],
     total_score = 0,
     total_scores_display = document.getElementById("total_scores"),
     average_scores_display = document.getElementById("average_score"),
     average_grade_display = document.getElementById("average_grade"),
     remark_text = document.getElementById("remark_text"),
     remark_image = document.getElementById("remark_image");


     ///calculate the result

     for(i = 0; i < scores_ids.length; i++){
        var new_value = document.getElementById(scores_ids[i]).value;
        total_score = Number(total_score) + Number(new_value);
     }

     //calculate average


     var average_score = total_score / scores_ids.length;

     var average_grade = calc_grade(average_score);

     var remarks_texts = average_score > 50 ? "You Are Doing Well" : "You Need To Do Better";

     var remarks_image = average_score > 50 ? "like_image.png" : "cry_emogi.jpeg";


     //perform Functionalities
     total_scores_display.innerText = total_score;

    average_scores_display.innerText = average_score;

    average_grade_display.innerText = average_grade;

    remark_text.innerText = remarks_texts;

    remark_image.src = remarks_image;
    remark_image.style.display = "block";

}