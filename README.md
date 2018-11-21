# README

The Traction app was built by a team of 5 junior developers as the capstone project of the immersive Momentum Learning, Inc. coding program. The app seeks to aid the NC Harm Reduction Coalition and other groups in fighting the opioid crisis. It organizes community volunteers, captures data, and tracks the distribution of Naloxone (Narcan) kits utilizing QR codes. It vastly improves the efficiency and security of data collection and analysis.

- Ruby version 5.2.1
- Database PostgreSQL
- Database initialization: Heroku
- Deployment: Heroku

# How to Use the Traction App

**Login Volunteer/Administrator**
POST /users

The request body:
```
{
	"user":
		{
        "email": "email@domain.com",
        "password": "password"
    	}
}
```
The response:
```
{
    "id": 1,
    "email": "email@domain.com",
    "password_digest": "$2a$11$T4lMD5zWF23B3WuFEREjgOrdr8mloT99TD8BIO6fQ4HLN0PFb2hGS",
    "auth_token": "MLzKW8Nzwhf4ugNc5ZgGmm2G",
    "admin": false
}
```

**Forgot Your Password?**
POST /users/password/new

The request body:
```
{
	"user":
		{
        "email": "email@domain.com",
    	}
}
```
The response is sent as a mailer function to the user's stored email account.

**Scan QR Code**
POST /qrscanner

The request body:
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

The response:
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

**Enter Serial # (from Scan QR Code Screen)**
POST /kitserials
The request body:
```
FRONTEND
```
The response:
```
FRONTEND CODE
```

**Input Kit Serial Codes**
POST /qrscanner

The request body:
```
FRONTEND CODE
```

The response:
```
FRONTEND CODE
```

**Submit Kit Serial Numbers**
POST /kitserials

The request body:
```
FRONTEND CODE
```

The response:
```
FRONTEND CODE
```

# ADMINISTRATOR-ONLY FUNCTIONS

**Register a New Volunteer Account**
POST /user/sign_up

The request body:
```
{
	"user":
		{
        "first_name": "test",
        "last_name": "Red Genesis",
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
        "password": "password",
        "password_confirmation": "password"
    	}
}
```

The response:
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

**View Inventory**
GET /inventories

The request body:
```

```

The response:
```

```

# Endpoints
**Update Inventory**
GET /inventories/1/edit

**View All Reversals**
GET /reversals
