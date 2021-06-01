# c1-summit-application
Basic Written Run of Application:
---------------------------------
1. User will input a movie title that is non-cap-sensitive (required field but catch if none is imputed)
2. After the user presses the submit button it will display the movie in a user friendly way with the details of the release date, runtime, genre, and director of the movie.

Basic Application Algorithm:
----------------------
* Program will take in a total of 1 input from the user
* String query *required field* - can be a movie or a show title that can be non-cap-sensitive
* If field is NOT put in the user will be notified that a field needs to be put in
* If field is put in and submitted it will then use that string as a query to put into the API
* From the API it will grab the necessary fields release date, runtime, genre, and director of the movie
* This data will then populate into a table that will be presented to user
* IF the search query is not definitive then it will pull data that is closely related to from the spelling of key