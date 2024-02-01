Backend:

1) For downsampling you can go through 'test.py' in Chakr_Backend folder, run it using python3 test.py. I have divided this primary dataset on the basis of month, five_day_average, one_day_average & weekly_average. There are 4 ways in which you can choose to see the graph of which categories are whole, yearly, monthly & period where one can specify a start date & end date. Whole would output monthly average of all the months & gives the output. Yearly asks for the year & gives you the five_day_average of the data. Monthly asks for year & month & outputs one_day_average of the data. Period asks the start_date & end_date & gives the weekly_average of the data. 

2) Create a virtual environment with the command python3 -m venv <name of the environment> & use command source <name of the environment>/bin/activate. Now, you are in the virtial envionment, run pip install -r requirements.txt to & all the libraries needed to run the server will run.

3) After all this run server.py which will expose an api /plot & you pass various params like whole, monthly, yearly etc. This is a flask server running on 6000 port

Fronend:

1) You need to go to Chakr_Frontend via terminal & run npm start & change the Growth section accordingly.
2) I have divided frotend in 4 parts namely Leftsection, TopSection, MiddleSection & BottomSection, this is done to make the code modularized.


Misses:
1) Deployment.
2) Some Frontend Features.
3) At a point when you try to enter year to get yearly graph the api call goes on continuously, this could be controlled by making the api call only on a button click of submit.
4) Graoh opens in a separate tab, couldn't accomodate it in the frontend.