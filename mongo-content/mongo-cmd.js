db.customer.insertOne(
    {
        "name": "ali",
        "surname": "yaycıoğlu",
        "height": 200,
        "weight": 90
    }
)


db.customer.insertMany(
    [
        {
            "name": "ali",
            "surname": "veli",
            "height": 180,
            "weight": 99
        },
        {
            "name": "ayşe",
            "surname": "alaz",
            "height": 170,
            "weight": 55
        }

    ]
)
db.customer.find()
db.customer.deleteOne({ _id: ObjectId('65b23fcbae86e661be487c41') })

db.customer.insertOne(
    {
        "name": "osman",
        "surname": "yaycıoğlu",
        "height": 200,
        "weight": 90,
        "age": 54
    }
)


db.customer.insertOne(
    {
        "firstName": "osman",
        "lastName": "yaycıoğlu",
        "heightcm": 200,
        "weightkg": 90,
        "birth": "1970-11-11",
        "middleName": "tulgar"
    }
)


// select * from customer where name="ali"
db.customer.find(
    //Search
    { "name": "ali" },
    // projection
    {}
)

db.customer.find(
    { "name": "ali" }
)

db.customer.getIndexes()


// select name,surname from customer where name="ali"
db.customer.find(
    //Search
    { "name": "ali" },
    // projection
    {
        "name": 1,
        "surname": 1
    }
)

db.customer.find(
    { "name": "ali" },
    {
        "name": 1,
        "surname": 1
    }
)

db.customer.find(
    { "name": "ali" },
    {
        _id: 0,
        "name": 1,
        "surname": 1
    }
)


db.customer.deleteOne(
    { "name": "ali" }
)

db.customer.deleteMany(
    { "name": "ali" }
)

db.customer.insertOne(
    {
        "firstName": "osman",
        "lastName": "yaycıoğlu",
        "heightcm": 200,
        "weightkg": 90,
        "birth": "1970-11-11",
        "middleName": "tulgar",
        "defaultAddress": {
            "city": "istanbul",
            "district": "ataşehir",
            "street": "ataturk"
        }
    }
)

db.customer.insertOne(
    {
        "firstName": "ali",
        "lastName": "veli",
        "heightcm": 200,
        "weightkg": 90,
        "birth": "1970-11-11",
        "middleName": "tulgar",
        "defaultAddress": {
            "city": "istanbul",
            "district": "ataşehir",
            "street": "ataturk",
            "addr": "orası burası dön"
        }
    }
)



db.customer.insertOne(
    {
        "firstName": "mehmet",
        "lastName": "deneme",
        "heightcm": 190,
        "weightkg": 90,
        "birth": "1970-09-09",
        "middleName": "tulgar",
        "defaultAddress": {
            "city": "istanbul",
            "district": "caddebostan",
            "street": "ataturk",
            "addr": "test"
        },
        "phones": [
            {
                "phoneName": "ev",
                "phoneNumber": "34789237423"
            },
            {
                "phoneName": "ofis",
                "phoneNumber": "23674363444"
            },
            {
                "phoneName": "yazlık",
                "phoneNumber": "432745444"
            }

        ]
    }
)

db.customer.insertOne(
    {
        "firstName": "ayşe",
        "lastName": "hala",
        "heightcm": 170,
        "weightkg": 90,
        "birth": "1970-09-09",
        "middleName": "test",
        "defaultAddress": {
            "city": "ankara",
            "district": "mamak",
            "street": "abc",
            "addr": "test"
        },
        "phones": [
            {
                "phoneName": "ev",
                "phoneNumber": "2937423423"
            },
            {
                "phoneName": "ofis",
                "phoneNumber": "24877234234"
            },
            {
                "phoneName": "yazlık",
                "phoneNumber": "3948757453"
            }

        ]
    }
)

db.customer.find(
    { "defaultAddress.city": "ankara" }
)

// select * from customer firstName="ayşe" and lastName="hala"
db.customer.find(
    {
        "firstName": "ayşe",
        "lastName": "hala"
    }
)


// select * from customer heightcm > 170
// $gt 
db.customer.find(
    { "heightcm": { "$gt": 170 } }
)

// $gte
db.customer.find(
    { "heightcm": { "$gte": 170 } }
)

// $lte
db.customer.find(
    { "heightcm": { "$lte": 170 } }
)

// select * from customer heightcm > 170 and weightkg <= 90
db.customer.find(
    {
        "heightcm": { "$gt": 170 },
        "weightkg": { "$lte": 90 }
    }
)

// select * from customer heightcm > 170 or weightkg <= 90
db.customer.find(
    {
        "$or": [
            { "heightcm": { "$gt": 170 } },
            { "weightkg": { "$lte": 90 } }
        ]
    }
)

db.customer.find(
    {
        "$or": [
            {
                "$and": [
                    { "heightcm": { "$gt": 170 } },
                    { "weightkg": { "$lte": 90 } }
                ]
            },
            { "firstName": "ayşe" }
        ]
    }
)

db.customer.insertOne(
    {
        "firstName": "test",
        "lastName": "yaycıoğlu",
        "heightcm": 200,
        "weightkg": 90,
        "birth": "1970-11-11",
        "middleName": "tulgar",
        "createDate": ISODate("2023-05-18T14:10:30.000Z"),
        "createDate2": new Date(),
        "defaultAddress": {
            "city": "istanbul",
            "district": "ataşehir",
            "street": "ataturk"
        }
    }
)

db.customer.find(
    {
        "createDate": { "$gt": ISODate("2023-01-01T00:00:00.000Z") }
    }
)

db.customer.find(
    {
        "firstName": { "$in": ["osman", "ali"] }
    }
)

db.customer.find(
    {
        "firstName": { "$exists": "true", "$nin": ["osman", "ali"] }
    }
)

db.customer.find(
    {
        "firstName": { "$type": 1 }
    }
)

db.customer.find(
    {
        "firstName": { "$type": "double" }
    }
)

db.customer.insertOne(
    {
        "firstName": 10.5,
        "lastName": "yaycıoğlu",
    }
)

db.customer.insertOne(
    {
        "firstName": NumberLong(100),
        "lastName": "yaycıoğlu",
    }
)

db.customer.find(
    {
        "firstName": {
            "$exists": "true", "$nin": ["osman", "ali"]
        },
    },
    {
        "total":  {"$sum" : ["$heightcm","$weightkg"]} ,
        _id: 0,
        "firstName": 1,
        "lastName": 1,
        
    }
)


db.customer.find(
    {
        "firstName": {
            "$exists": "true", "$nin": ["osman", "ali"]
        },
    }
).sort({"firstname" : 1,"lastName":1})

db.customer.find(
    {
        "firstName": {
            "$exists": "true", 
            "$type":"string",
            "$nin": ["osman", "ali"]
        },
    }
).sort({"firstname" : -1}).limit(2).skip(2)
