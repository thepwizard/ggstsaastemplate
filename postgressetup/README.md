## Getting Started

This is a quick setup for postgres to test the deployment of application

## To install follow this blog

[Install Postgres](https://www.digitalocean.com/community/tutorials/how-to-deploy-postgres-to-kubernetes-cluster)


```bash
kubectl apply -f postgres-configmap.yaml
kubectl get configmap
kubectl apply -f psql-pv.yaml
kubectl apply -f psql-claim.yaml
kubectl get pv
kubectl get pvc
kubectl apply -f ps-deployment.yaml
kubectl get deployments
kubectl get pods
kubectl apply -f ps-service.yaml
kubectl get svc
kubectl exec -it postgres-665b7554dc-cddgq -- psql -h localhost -U ps_user --password -p 5432 ps_db
kubectl get pods -l app=postgres
kubectl scale deployment --replicas=5 postgres
kubectl get pods -l app=postgres
```