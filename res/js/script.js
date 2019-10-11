$(function () {
	var user = new User("John", "Doe", "11/10/1990", "Software Engineering", 2.75);
	var cources = [ new Course(1,"Agile software development",1,82),
					new Course(2,"System modeling",1,85),
					new Course(3,"Object-oriented programming",2,99),
					new Course(4,"Estonian language Level A2",2,65)];
	
	
	
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
    function init() {
	
	
	
	
	
	}
	
	
	});