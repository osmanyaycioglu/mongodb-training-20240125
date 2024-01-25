podman pull <image_name:tag>
podman run <image_name:tag> <command>
podman run -it <image_name:tag> <command>
podman exec <container_name | container_id> <command>
podman exec -it <container_name | container_id> <command>

 podman container ls -a
 podman ps -a
 
 podman container rm f913b77b9a29
podman container prune

 podman images
 podman rmi 618565f9b891

podman stop 31d8f6f5723e
podman start 31d8f6f5723e
podman restart 31d8f6f5723e

podman run -d --rm --name redis1 ffa574b64fb9 redis-server

podman network create --driver=bridge --subnet=10.100.0.0/16 test0

podman run -d --rm --name redis1 ffa574b64fb9 redis-server
podman commit redis3 my-redis:v1.0.0

podman run -d --name my-redis1 --network test0 d1270e231bb0 redis-server


kubectl get nodes
kubectl describe nodes minikube

kubectl get namespace
kubectl get ns

kubectl get pods -n kube-system

kubectl run busybox --image=busybox --restart=Never --dry-run=client -o yaml

kubectl get pods -l our-nginx

kubectl create deployment my-dep --image=nginx --replicas=3 --dry-run=client -o yaml

kubectl apply -f .\all.yaml
kubectl delete -f .\all.yaml

kubectl get pods -o wide

kubectl describe pod nginx-dep-fc54b6d74-4bns2

kubectl get deployment -o wide

kubectl get replicaset -o wide
