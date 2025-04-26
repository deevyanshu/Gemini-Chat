import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ChatService } from './chat.service';
import { error } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GeminiChatFrontEnd';
  question!:string
  response:boolean=false;
  result!:string;
  loading:boolean=false;
  
  constructor(private service:ChatService){

  }

  handleSubmit(){
    this.question.trim();
    this.response=true;
    this.loading=true;
    this.service.askQuestion(this.question).subscribe((res)=>{
      //console.log(res.candidates[0].content.parts[0].text);
      this.loading=false;
      this.result=res.candidates[0].content.parts[0].text;
      

    },error=>{
      this.loading=false;
      this.result="API Not working";
      console.log(error);
    })
    
  }

  
}
