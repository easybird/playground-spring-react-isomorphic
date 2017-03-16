package io.spring.isomorphic;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.view.script.ScriptTemplateConfigurer;
import org.springframework.web.servlet.view.script.ScriptTemplateViewResolver;

@SpringBootApplication
public class IsomorphicApplication {


    public static void main(String[] args) {
        SpringApplication.run(IsomorphicApplication.class, args);
    }

    @Bean
    CommandLineRunner init(CommentRepository cr) {
        return args -> {

            cr.save(new Comment("Easybird", "Saved in CommentRepo!"));
            cr.save(new Comment("Vegas on Tour", "Forever!"));

            System.out.println("---------------------------------");
            cr.findAll().forEach(System.out::println);
            System.out.println("---------------------------------");
        };
    }

    @Bean
    public ViewResolver viewResolver() {
        ScriptTemplateViewResolver viewResolver = new ScriptTemplateViewResolver();
        viewResolver.setPrefix("static/templates/");
        viewResolver.setSuffix(".ejs");
        viewResolver.setCache(true);

        return viewResolver;
    }

    @Bean
    public ScriptTemplateConfigurer scriptTemplateConfigurer() {
        ScriptTemplateConfigurer configurer = new ScriptTemplateConfigurer();
        configurer.setEngineName("nashorn");
        configurer.setScripts(
                "static/polyfill.js",
                "static/lib/js/ejs.min.js",
                "static/render.js",
                "static/output/bundle.js");
        configurer.setRenderFunction("render");
        configurer.setSharedEngine(false);
        return configurer;
    }
}
