import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  notes!: Note[];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.findAll().subscribe(data => {
      this.notes = data;
    });
  }

}
