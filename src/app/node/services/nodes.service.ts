import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NodesResponse} from '../interfaces/responses/nodes-response';

@Injectable({
  providedIn: 'root'
})
export class NodesService {

  constructor(private http: HttpClient) { }

  getNodes() {
    return this.http.get<NodesResponse>('./assets/nodes.json');
  }
}
