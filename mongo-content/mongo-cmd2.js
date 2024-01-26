db.customer.insertOne(
    {
        "_id": 1,
        "firstName": "kemal",
        "lastName": "kus",
        "heightcm": 190,
        "weightkg": 85,
        "birth": "1978-12-02",
        "middleName": "ramiz",
        "createDate": ISODate("2023-05-18T14:10:30.000Z"),
        "createDate2": new Date(),
        "defaultAddress": {
            "city": "istanbul",
            "district": "ataşehir",
            "street": "ataturk"
        }
    }
)

db.customer.updateOne(
    {
        "_id": 1
    },
    {
        "$set": { "firstName": "mehmet" }
    }
)

db.customer.updateOne(
    {
        "_id": 1
    },
    {
        "$unset": { "birth": 1 }
    }
)

db.customer.updateOne(
    {
        "_id": 1
    },
    {
        "$inc": { "weightkg": 1 }
    }
)

db.customer.updateMany(
    {},
    {
        "$rename": { "heightcm": "height" }
    }
)

db.customer.updateOne(
    {
        "_id": 1
    },
    {
        "$set": { "created": new Date() }
    }
)


db.customer.updateOne(
    {
        "_id": 1
    },
    [
        {
            "$set": { "wh": ["$weightkg", "$height"] }
        },
        {
            "$unset": ["weightkg", "height"]
        }
    ]
)

db.customer.insertOne(
    {
        "_id": 2,
        "firstName": "kemal",
        "lastName": "kus",
        "heightcm": 190,
        "weightkg": 85,
        "birth": "1978-12-02",
        "middleName": "ramiz",
        "createDate": ISODate("2023-05-18T14:10:30.000Z"),
        "createDate2": new Date(),
        "defaultAddress": {
            "city": "istanbul",
            "district": "ataşehir",
            "street": "ataturk"
        }
    }
)

db.customer.updateOne(
    {
        "_id": 2
    },
    {
        "$min": { "heightcm": 175 }
    }
)

db.customer.updateOne(
    {
        "_id": 2
    },
    {
        "$max": { "heightcm": 175 }
    }
)

db.customer.updateOne(
    {
        "_id": 2
    },
    {
        "$mul": { "heightcm": 2 }
    }
)

db.customer.updateOne(
    { _id: 1 },
    [
        { $set: { lastModified: "$$NOW", cancellation: { reason: "user request" }, status: "D" } }
    ]
)
