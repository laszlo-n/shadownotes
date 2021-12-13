package hu.unideb.webdev.shadowbooru;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class NoteController {

    private final NoteRepository noteRepository;

    public NoteController(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @GetMapping("/notes")
    public List<Note> getNotes() {
        return (List<Note>) noteRepository.findAll();
    }

    @PostMapping("/notes")
    void addNote(@RequestBody Note note) {
        noteRepository.save(note);
    }
}
