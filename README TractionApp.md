# How to Use the Traction Application

**Login User (Volunteer)**
POST /users

Request body:
```
{
	"user":
		{
        "email": "email@domain.com",
        "password": "password"
    	}
}
```
Response:
```
{
    "id": 1,
    "email": "email@domain.com",
    "password_digest": "$2a$11$6srJu7eY1cS0lJeImNTQSuYetSbsY.jvEc4ET30Ws37WVjRlyHWRO",
    "auth_token": "NC9hSMqTnsQmcebKoGFfHqpS",
    "admin": false
}
```

**Login User (Administrator)**
POST /users

Request body:
```
{
	"user":
		{
        "email": "email@domain.com",
        "password": "password"
    	}
}
```
Response:
```
{
    "id": 1,
    "email": "email@domain.com",
    "password_digest": "$2a$11$oXiCzCdoTo8ZtZol9i2M.OvVK51xbLQf4ugC3fHgTq/EW8QowpqoC",
    "auth_token": "hZxAq5xNmB21EdGp7RgLz48H",
    "admin": true
}
```

**Forgot Your Password?**
POST /users/password/new

Request body:
```
{
	"user":
		{
        "email": "email@domain.com"
    	}
}
```

The response is sent as a mailer function to the user's stored email account.

**Scan QR Code**
POST /kitserials

Request body:
```
{
            'client': {'first_name': values.firstName,
              'last_name': values.lastName,
              'date_of_birth': values.dateOfBirth,
              'city': values.townCity,
              'county': values.county,
              'distributed_date': values.dateOfDistribution,
              'kit_type': values.kitType,
              'serial_num': values.kitSerialNumber,
              'first_kit': values.firstNaloxoneKit,
              'overdoseReversal': values.overdoseReversal,
              'rkit_type': values.overdoseReversalKitType,
              'rtown': values.overdoseReversalTownCity,
              'rcounty': values.overdoseReversalCounty,
              'rdoses': values.numberOfDoses,
              'rtime_between': values.minutesBetweenDoses }}
```

Response:
```
{
            'client': {'first_name': values.firstName,
              'last_name': values.lastName,
              'date_of_birth': values.dateOfBirth,
              'city': values.townCity,
              'county': values.county,
              'distributed_date': values.dateOfDistribution,
              'kit_type': values.kitType,
              'serial_num': values.kitSerialNumber,
              'first_kit': values.firstNaloxoneKit,
              'overdoseReversal': values.overdoseReversal,
              'rkit_type': values.overdoseReversalKitType,
              'rtown': values.overdoseReversalTownCity,
              'rcounty': values.overdoseReversalCounty,
              'rdoses': values.numberOfDoses,
              'rtime_between': values.minutesBetweenDoses }}
```

**Input Kit Serial Codes #**
POST /kitserials?status=manual
Request body:
```
 
```
Response:
```

```

**Form Submission**
POST /kitserials?status=manual

Request body:
```
{ firstName: '',
        lastName: '',
        dateOfBirth: '',
        townCity: '',
        county: '',
        dateOfDistribution: moment().format('YYYY-MM-D'),
        numberOfKits: props.results.length,
        kitType: props.results.map(() => 'IM'),
        kitSerialNumber: props.results,
        firstNaloxoneKit: '',
        overdoseReversal: '',
        overdoseReversalKitType: '',
        overdoseReversalTownCity: '',
        overdoseReversalCounty: '',
        numberOfDoses: '',
        minutesBetweenDoses: '' }
```
Response:
```
{
	firstName: 'First',
	lastName: 'Last',
	dateOfBirth: '2018-10-10',
	townCity: 'City',
	county: 'County',
	dateOfDistribution: moment().format('YYYY-MM-D'),
	numberOfKits: props.results.length,
	kitType: props.results.map(() => 'IM'),
	kitSerialNumber: props.results,
	firstNaloxoneKit: true,
	overdoseReversal: true,
	overdoseReversalKitType: 'IM',
	overdoseReversalTownCity: 'City',
	overdoseReversalCounty: 'County',
	numberOfDoses: '2',
	minutesBetweenDoses: '2'
}
```


# ADMINISTRATOR-ONLY FUNCTIONS

**Register New Volunteer**
POST /

Request body:
```
{
	"user":
		{
        "first_name": "",
        "last_name": "",
        "phone": "",
        "county": "",
        "address1": "",
        "adress2": "",
        "city": "",
        "state": "",
        "zip": "",
        "admin": ,
        "contact_type": "",
        "date_auth": "",
        "admin_auth": "",
        "email": "",
        "password": "",
        "password_confirmation": ""
    	}
}
```

Response:
```
{
        "user_id": 1,
        "first_name": "FirstName",
        "last_name": "LastName",
        "phone": "919-123-1234",
        "county": "Orange",
        "address1": "101 Address Lane",
        "adress2": "PO Box 1234",
        "city": "North Jefferson",
        "state": "MT",
        "zip": "37140-0430",
        "admin": true,
        "contact_type": "mobile",
        "date_auth": "2018-10-10",
        "admin_auth": "2018-10-10",
        "email": "edwin.lebsack@email.com",
        "auth_token": "7qFhx5c9d36fW"
        "password_digest": "$2a$11$oeL5lgH",
        "date_auth": "2018-10-08T0",
        "admin_auth": "2018-10-08T0",
        "created_at": "2018-10-07T21:",
        "updated_at": "2018-10-07T2"
}
```


# Endpoints
**Naloxone Distribution**
GET /home

**Reversals**
GET /reversals

**Inventory**
GET /inventories

**Update Inventory**
GET /inventories/1/edit

**Volunteers**
GET /users

**Update Volunteer**
GET /users/4/edit


**Register Volunteer**
GET /users/new







