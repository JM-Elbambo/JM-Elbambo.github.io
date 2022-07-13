$(document).ready(function () {	
	$('#sidebarBtn').on('click', function () {
		$('#sidebar, #mainFrame, #navbar').toggleClass('active');
	});
	
	// setTimeout(updateScrollSpy, 1000);
});

function updateScrollSpy() {
    $('#content').scrollspy('refresh');
}