import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../service/note.service';
import { Note } from '../model/note';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent {

  note!: Note;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private noteService: NoteService
  ) { 
    this.note = new Note();
  }

  onSubmit() {
    this.noteService.save(this.note).subscribe(result => this.router.navigate(['/notes']));
  }

}
