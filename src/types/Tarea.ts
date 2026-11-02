export interface Tarea {
  id: string | number;
  titulo: string;
  descripcion: string;
  responsable: string;
}

export type NuevaTarea = Omit<Tarea, "id">;
