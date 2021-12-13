import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from '../model/note';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notesUrl: string;

  constructor(private http: HttpClient) {
    this.notesUrl = "http://localhost:8080/notes";
  }

  public findAll(): Observable<Note[]> {
    return this.http.get<Note[]>(this.notesUrl);
  }

  public save(note: Note) {
    return this.http.post<Note>(this.notesUrl, note);
  }
}
