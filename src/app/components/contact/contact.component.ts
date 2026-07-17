import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  form!: FormGroup;

  private readonly PHONE = '34666087161';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      nombre:  ['', [Validators.required, Validators.minLength(2)]],
      email:   ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  hasError(field: string): boolean {
    const c = this.form.get(field);
    return !!(c && c.touched && c.errors);
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    const { nombre, email, mensaje } = this.form.value;
    const text = `Hola DevDyD 👋\n\n*Nombre:* ${nombre}\n*Email:* ${email}\n\n*Mensaje:*\n${mensaje}`;
    window.open(`https://wa.me/${this.PHONE}?text=${encodeURIComponent(text)}`, '_blank');
  }
}
