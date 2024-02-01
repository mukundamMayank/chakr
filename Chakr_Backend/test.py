import pandas as pd


csv_file_path = 'dataset.csv'

chunk_size = 1000

chunks = []

for chunk in pd.read_csv(csv_file_path, chunksize=chunk_size):
    chunks.append(chunk)

full_dataframe = pd.concat(chunks, ignore_index=True)

full_dataframe['Timestamp'] = pd.to_datetime(full_dataframe['Timestamp'])

monthly_average = pd.DataFrame(columns=full_dataframe.columns)
five_day_average = pd.DataFrame(columns=full_dataframe.columns)
one_day_average = pd.DataFrame(columns=full_dataframe.columns)
weekly_average = pd.DataFrame(columns=full_dataframe.columns)


for year_month in full_dataframe['Timestamp'].dt.to_period('M').unique():
    mask = (full_dataframe['Timestamp'].dt.to_period('M') == year_month)
    monthly_average = monthly_average.append({'Timestamp': year_month.start_time, 'Profit Percentage': full_dataframe[mask]['Profit Percentage'].mean()}, ignore_index=True)


for year_month_day in full_dataframe['Timestamp'].dt.to_period('5D').unique():
    mask = (full_dataframe['Timestamp'].dt.to_period('5D') == year_month_day)
    five_day_average = five_day_average.append({'Timestamp': year_month_day.start_time, 'Profit Percentage': full_dataframe[mask]['Profit Percentage'].mean()}, ignore_index=True)

for start_date in pd.date_range(full_dataframe['Timestamp'].min(), full_dataframe['Timestamp'].max(), freq='5D'):
    end_date = start_date + pd.DateOffset(days=4)
    mask = (full_dataframe['Timestamp'] >= start_date) & (full_dataframe['Timestamp'] <= end_date)
    average_value = full_dataframe.loc[mask, 'Profit Percentage'].mean()
    
    five_day_average = five_day_average.append({'Timestamp': start_date, 'Profit Percentage': average_value}, ignore_index=True)


for day in full_dataframe['Timestamp'].dt.to_period('D').unique():
    mask = (full_dataframe['Timestamp'].dt.to_period('D') == day)
    one_day_average = one_day_average.append({'Timestamp': day.start_time, 'Profit Percentage': full_dataframe[mask]['Profit Percentage'].mean()}, ignore_index=True)

for year_week in full_dataframe['Timestamp'].dt.to_period('W').unique():
    mask = (full_dataframe['Timestamp'].dt.to_period('W') == year_week)
    weekly_average = weekly_average.append({'Timestamp': year_week.start_time, 'Profit Percentage': full_dataframe[mask]['Profit Percentage'].mean()}, ignore_index=True)

monthly_average.to_csv('monthly_average.csv', index=False)
five_day_average.to_csv('five_day_average.csv', index=False)
one_day_average.to_csv('one_day_average.csv', index=False)
weekly_average.to_csv('weekly_average.csv', index=False)
