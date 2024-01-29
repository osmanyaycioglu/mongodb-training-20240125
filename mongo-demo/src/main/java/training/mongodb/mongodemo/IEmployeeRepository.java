package training.mongodb.mongodemo;

import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface IEmployeeRepository extends MongoRepository<Employee,String> {

    List<Employee> findByName(String name);

    List<Employee> findByNameAndSurname(String name,String surname);

    List<Employee> findByHeightBetween(Integer min,Integer max);

    @Query("{name :  ?0}")
    List<Employee> searchName(String name);

    @Query("{name :  ?0,surname :  ?1}")
    List<Employee> searchNameAndSurname(String name,String surname);

    @Query(value = "{name :  ?0}",fields = "{name: 1,surname: 1}")
    List<Employee> searchName2(String name);

    @Aggregation(pipeline = {
            "{$match :  { height : { $gt : ?0}}}",
            " {$sort : {name : 1}}"
    })
    List<Employee> aggHeight(Integer height);

}
