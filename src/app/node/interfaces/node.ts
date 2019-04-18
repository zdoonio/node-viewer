export interface Node {
  nodeId: number;
  name: string;
  nodes: Array<SubNode>;
}

interface SubNode {
  nodeId: number;
  name: string;
}
