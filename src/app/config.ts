import { HttpHeaders } from '@angular/common/http';

export const API = 'http://95.213.203.10:8081';
export const KEY = 'syJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjVhYzBjN2JjZDNkZDdlZWRiNmZkMWM3NiIsIlVzZXJOYW1lIjoiSGlrZSIsImRhdGUiOjE0NDQ0Nzg0MDB9.dwUkukhoKLSCIoL2OzK3DaY8FZiB7su05cXEdHryLi8';
export const HEADERS = new HttpHeaders()
  .set('Authorization', KEY);
