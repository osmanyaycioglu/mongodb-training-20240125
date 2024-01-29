package training.mongodb.mongodemo;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/employee")
@RequiredArgsConstructor
public class EmployeeController {
    private final IEmployeeRepository employeeRepository;
    private final  ICommentRepository commentRepository;

    @PostMapping("/add")
    public String add(@RequestBody Employee employeeParam){
        commentRepository.saveAll(employeeParam.getComments());
        employeeRepository.save(employeeParam);
        return "OK";
    }

    @GetMapping("/get/by/name")
    public List<Employee> getByName(@RequestParam String name){
        return employeeRepository.findByName(name);
    }

    @GetMapping("/get/agg/height")
    public List<Employee> aggHeight(@RequestParam Integer height){
        return employeeRepository.aggHeight(height);
    }

}
