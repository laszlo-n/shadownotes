import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteFormComponent } from './note-form/note-form.component';
import { NoteListComponent } from './note-list/note-list.component';

const routes: Routes = [
  { path: 'notes', component: NoteListComponent },
  { path: 'addnote', component: NoteFormComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
