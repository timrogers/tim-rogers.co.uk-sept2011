function twitter_callback_function(tweet) {

	$("#tweet").html(tweet[0].text);
}

  twttr.anywhere(function (T) {
    T.hovercards();
	T.linkifyUsers();
  });