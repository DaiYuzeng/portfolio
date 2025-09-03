import { ProjectMeta } from "@/types/components"

const projectsMetaData: ProjectMeta[] = [
  {
    "id": "harvester",
    "link": "https://www.suse.com/products/rancher/virtualization/",
    "imgUrl": "/imgs/harvester.jpg",
    "externalLinks": [
      { title: "4.6K+", url: "https://github.com/harvester", icon: "Star" },
    ]
  },
  {
    "id": "rancher",
    "link": "https://www.suse.com/products/rancher/",
    "imgUrl": "/imgs/rancher.jpg",
    "externalLinks": [
      { title: "24.6K+", url: "https://github.com/rancher", icon: "Star" },
      { title: "100M+", url: "https://hub.docker.com/r/rancher/rancher", icon: "Download" },
      { title: "40M+ Customers", url: "https://www.suse.com/products/rancher/", icon: "Building2" },
    ]
  },
  {
    "id": "qingke",
    "imgUrl": "/imgs/qingke.jpg"
  }
]

export default projectsMetaData;
