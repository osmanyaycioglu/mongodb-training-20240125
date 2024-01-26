db.customer.aggregate(
    [
        {
            "$project": {
                "_id": 0,
                "firstName": 1,
                "lastName": 1,
                "height": 1,
                "weight": 1
            }
        },
        {
            "$match": {
                "firstName": { "$in": ["osman", "ali", "test"] }
            }
        },
        {
            "$addFields": {
                "newField": "$height",
                "total": {
                    $round: [
                        { $sum: ["$height", "$weightkg"] }
                        , 1
                    ]
                }
            }
        },
        {
            "$project": {
                "firstName": 1,
                "lastName": 1,
                "total": 1,
                "_id": 0
            }
        }

    ]
)


db.car.aggregate(
    [
        {
            $match: { _id: "737516871-7" }
        },
        {
            $unwind: "$variations"
        },
        {
            $limit: 10
        }
    ]
)

db.car.aggregate(
    [
        {
            $unwind: "$variations"
        },
        {
            $group: {
                _id: "$variations.variation",
                count: { $sum: 1 },
                price: { $avg: "$price" }
            }
        },
        {
            $sort: { count: 1 }
        }
    ]
)


db.car.aggregate(
    [
        {
            "$project": {
                "_id": 0,
                "name": 1,
                "model": 1,
                "year": 1,
                "price": 1,
                "variations" : 1
            }
        },
        {
            $unwind: "$variations"
        },
        {
            $group: {
                _id: "$variations.variation",
                count: { $sum: 1 },
                price: { $avg: "$price" },
                cars: {
                    $push: { "name": "$name", "model": "$model", "year": "$year" }
                }
            }
        },
        {
            $sort: { count: 1 }
        },
        {
            $out : "carreport"
        }
    ]
)


db.car.aggregate(
    [
        {
            $unwind: "$variations"
        },
        {
            $bucket: {
                groupBy: "$year",
                boundaries : [1960,1970,1980,1990,2000,2010],
                default: "other",
                output : {
                    count: { $sum: 1 },
                    price: { $avg: "$price" }
                }
            }
        }
    ]
)

db.car.aggregate(
    [
        {
            $unwind: "$variations"
        },
        {
            $bucket: {
                groupBy: "$year",
                boundaries : 10,
                output : {
                    count: { $sum: 1 },
                    price: { $avg: "$price" }
                }
            }
        }
    ]
)
