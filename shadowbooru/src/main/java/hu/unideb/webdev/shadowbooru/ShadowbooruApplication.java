package hu.unideb.webdev.shadowbooru;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class ShadowbooruApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShadowbooruApplication.class, args);
	}

	@Bean
	CommandLineRunner init(NoteRepository noteRepository) {
		return args -> {
			Stream.of("Sample Note #1", "Sample Note #2").forEach(title -> {
				Note note = new Note(title, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
				noteRepository.save(note);
			});
			// noteRepository.findAll().forEach(System.out::println);
		};
	}
}
