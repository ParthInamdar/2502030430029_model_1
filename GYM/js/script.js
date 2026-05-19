$(document).ready(function () {

    // Hero Button
    $(".hero-btn").click(function () {
        $("html, body").animate({
            scrollTop: $("#recommendation").offset().top - 70
        }, 800);
    });

    // Generate Plan
    $("#generate-btn").click(function () {

        let goal = $("#goal").val();
        let experience = $("#experience").val();

        if (goal === "" || experience === "") {
            alert("Please fill all fields!");
            return;
        }

        $("#generate-btn").text("Generating Plan...");

        setTimeout(function () {

            let workout = "";
            let diet = "";

            if (goal === "Weight Loss") {
                workout = "Cardio + HIIT + Fat Burn Training";
                diet = "High Protein + Low Sugar";
            }

            else if (goal === "Muscle Gain") {
                workout = "Push Pull Legs + Heavy Lifting";
                diet = "Protein Rich Diet";
            }

            else if (goal === "Fat Loss") {
                workout = "Strength + Cardio Mix";
                diet = "Calorie Deficit Diet";
            }

            else {
                workout = "Strength Training";
                diet = "Balanced Diet";
            }

            $("#workout-result").text(workout);
            $("#diet-result").text(diet);

            $("#result-box").fadeIn();

            $("#generate-btn").text("Generate Plan");

        }, 1500);

    });

    // BMI Calculator
    $("#calculate-bmi").click(function () {

        let height =
            parseFloat($("#bmi-height").val()) / 100;

        let weight =
            parseFloat($("#bmi-weight").val());

        if (!height || !weight) {
            alert("Enter valid values");
            return;
        }

        let bmi =
            (weight / (height * height)).toFixed(1);

        $("#bmi-result").html(
            "Your BMI is " + bmi
        );

    });

});