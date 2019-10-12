$(function () {
	var user = new User("John", "Doe", "11/10/1990", "Software Engineering", 2.75);
	var cources = [ new Course("Agile software development",1,82),
					new Course("System modeling",1,85),
					new Course("Object-oriented programming",2,99),
					new Course("Estonian language Level A2",2,65)];

	init();
	
	$('#profile-button').click(function (event) {
		$('#courses-container').removeClass("active");
		$('#profile-container').addClass("active");
		$('#courses-button').removeClass("active");
		$('#profile-button').addClass("active");
	});
	$('#courses-button').click(function (event) {
		$('#profile-container').removeClass("active");
		$('#courses-container').addClass("active");
		$('#profile-button').removeClass("active");
		$('#courses-button').addClass("active");
	});
	
	$('#add-course-button').click(function (event) {
		if($('#add-course').is( ".active" )){
			$('#add-course').hide().removeClass("active");
		}else{
			$('#add-course').show().addClass("active");
		}
	});

    $('#save-course').click(function (event) {
        var name = $('#title').val();
        var semester = $('#semester').val();
        var grade = $('#grade').val();

        cources.push(new Course(name,semester,grade));

        $('#title').val('');
        $('#semester').val('');
        $('#grade').val('');

        init();

        if($('#add-course').is( ".active" )){
            $('#add-course').hide().removeClass("active");
        }else{
            $('#add-course').show().addClass("active");
        }
    });

    $('#cancel-course').click(function (event) {

        $('#title').val('');
        $('#semester').val('');
        $('#grade').val('');

        if($('#add-course').is( ".active" )){
            $('#add-course').hide().removeClass("active");
        }else{
            $('#add-course').show().addClass("active");
        }
    });

    function gpa() {
    	sum = 0;
    	howmanycourses = 0;
        for (let i = 0; i < cources.length; i++) {
            if (cources[i].grade > 90){
            	sum = sum + 4;
			}
            else if (cources[i].grade > 80){
                sum = sum + 3;
            }
            else if (cources[i].grade > 70){
                sum = sum + 2;
            }
            else if (cources[i].grade > 60){
                sum = sum + 1;
            }
            else if (cources[i].grade > 50){
                sum = sum + 0.5;
            }
            howmanycourses = howmanycourses + 1;
        }
        return sum/howmanycourses;
    }

    function init() {

        $('#name').empty().append(user.firstname+' '+user.lastname);
        $('#birthdate').empty().append(user.birthdate);
        $('#faculty').empty().append(user.faculty);

    	nr = 1;
        $('#courses').empty();
        for (let i = 0; i < cources.length; i++) {
            $('#courses').append('<tr><td>'+nr+'</td><td>'+cources[i].title+'</td><td>'+cources[i].semester+'</td><td>'+cources[i].grade+'</td></tr>');
            nr = nr + 1;
        }
        user.gpa = gpa();
        $("#realgp").empty().append(user.gpa);
    }
});
