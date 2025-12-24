import { Component, OnInit, signal } from '@angular/core';
import { BtnPrimary } from '../btn-primary/btn-primary';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormService } from '../../services/form';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    BtnPrimary,
    ReactiveFormsModule
  ],
  providers: [
    FormService
  ],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
})
export class Forms implements OnInit {
  form!: FormGroup;
  loading = signal(false);

  constructor(private service: FormService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    this.loading.set(true);//atualizando para o valor que a gente quer
    if(this.form.valid) {
      this.service.sendData(this.form.value.nome, this.form.value.email).subscribe({
        next: () => {
          this.form.reset();
          this.loading.set(false);
        }
      });
    }
  }
}
