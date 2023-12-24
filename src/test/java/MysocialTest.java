import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import static org.junit.jupiter.api.Assertions.*;

import com.intuit.karate.driver.Driver;
import net.masterthought.cucumber.presentation.PresentationMode;
import net.masterthought.cucumber.sorting.SortingMethod;
import org.junit.jupiter.api.Test;
import java.io.File;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;
import org.apache.commons.io.FileUtils;


public class MysocialTest {
    @Test
    void testParallel() {
//        Results results = Runner.path("src/test/java/mysocial/test.feature");
        Results results = Runner.path("classpath:mysocial").tags("@ANDROID", "@TEST")
                .outputCucumberJson(true)
                .parallel(1);
        generateReport(results.getReportDir());
    }
    public static void generateReport(String karateOutputPath) {
        Collection<File> jsonFiles = FileUtils.listFiles(new File(karateOutputPath), new String[] {"json"}, true);
        List<String> jsonPaths = new ArrayList<>(jsonFiles.size());
        jsonFiles.forEach(file -> jsonPaths.add(file.getAbsolutePath()));


        String buildNumber = "101";
        String projectName = "Live Demo Project";
        Configuration configuration = new Configuration(new File("target"), projectName);
        // lần build góc trái màn hình bên trên
        configuration.setBuildNumber(buildNumber);
        // thêm bảng thông số góc phải trên cùng màn hình : tuỳ biến
        configuration.addClassifications("Browser", "Firefox");
        configuration.addClassifications("Branch", "release/1.0");

        // sắp xếp tên của file feature
        // configuration.setSortingMethod(SortingMethod.NATURAL);

        // mở all step trong report
        // configuration.addPresentationModes(PresentationMode.EXPAND_ALL_STEPS);

        // thêm 1 côt qualify file json trong file report
        configuration.addPresentationModes(PresentationMode.PARALLEL_TESTING);
        ReportBuilder reportBuilder = new ReportBuilder(jsonPaths, configuration);
        reportBuilder.generateReports();
    }    
}
