import {PLEX_COMPOSE_FILE} from "./compose/plex.compose";
import {SONARR_COMPOSE_FILE} from "./compose/sonar.compose";
import {RADARR_COMPOSE_FILE} from "./compose/radarr.compose";
import {LIDARR_COMPOSE_FILE} from "./compose/lidarr.compose";
import {READARR_COMPOSE_FILE} from "./compose/readarr.compose";
import {BAZARR_COMPOSE_FILE} from "./compose/bazarr.compose";
import {MYLAR3_COMPOSE_FILE} from "./compose/mylar3.compose";
import {PROWLARR_COMPOSE_FILE} from "./compose/prowlarr.compose";
import {OVERSEERR_COMPOSE_FILE} from "./compose/overseerr.compose";
import {REQUESTRR_COMPOSE_FILE} from "./compose/requestrr.compose";
import {TAUTULLI_COMPOSE_FILE} from "./compose/tautulli.compose";
import {UNMANIC_COMPOSE_FILE} from "./compose/unmanic.compose";
import {SABNZBD_COMPOSE_FILE} from "./compose/sabnzbd.compose";
import {DELUGE_COMPOSE_FILE} from "./compose/deluge.compose";
import {EMULATORJS_COMPOSE_FILE} from "./compose/emulatorjs.compose";
import {UBOOQUITY_COMPOSE_FILE} from "./compose/ubooquity.compose";
import {NPM_COMPOSE_FILE} from "./compose/nginx-proxy-manager.compose";
import {PORTAINER_COMPOSE_FILE} from "./compose/portainer.compose";
import {WATCHTOWER_COMPOSE_FILE} from "./compose/watchtower.compose";

export interface DockerComposeFile {
    name: string;
    file: string;
}

export const DOCKARR_NETWORK_COMPOSE = {
    "dockarr": {
        driver: "bridge",
        external: false,
        name: "dockarr"
    }
};

export const COMPOSE_FILES: DockerComposeFile[] = [
    {name: 'Plex', file: JSON.stringify(PLEX_COMPOSE_FILE)},
    {name: 'Sonarr', file: JSON.stringify(SONARR_COMPOSE_FILE)},
    {name: 'Radarr', file: JSON.stringify(RADARR_COMPOSE_FILE)},
    {name: 'Lidarr', file: JSON.stringify(LIDARR_COMPOSE_FILE)},
    {name: 'Readarr', file: JSON.stringify(READARR_COMPOSE_FILE)},
    {name: 'Bazarr', file: JSON.stringify(BAZARR_COMPOSE_FILE)},
    {name: 'Mylar3', file: JSON.stringify(MYLAR3_COMPOSE_FILE)},
    {name: 'Prowlarr', file: JSON.stringify(PROWLARR_COMPOSE_FILE)},
    {name: 'Overseerr', file: JSON.stringify(OVERSEERR_COMPOSE_FILE)},
    {name: 'Requestrr', file: JSON.stringify(REQUESTRR_COMPOSE_FILE)},
    {name: 'Tautulli', file: JSON.stringify(TAUTULLI_COMPOSE_FILE)},
    {name: 'Unmanic', file: JSON.stringify(UNMANIC_COMPOSE_FILE)},
    {name: 'SABnzbd', file: JSON.stringify(SABNZBD_COMPOSE_FILE)},
    {name: 'Deluge', file: JSON.stringify(DELUGE_COMPOSE_FILE)},
    {name: 'EmulatorJS', file: JSON.stringify(EMULATORJS_COMPOSE_FILE)},
    {name: 'Ubooquity', file: JSON.stringify(UBOOQUITY_COMPOSE_FILE)},
    {name: 'NGINX-proxy-manager', file: JSON.stringify(NPM_COMPOSE_FILE)},
    {name: 'Portainer', file: JSON.stringify(PORTAINER_COMPOSE_FILE)},
    {name: 'WatchTower', file: JSON.stringify(WATCHTOWER_COMPOSE_FILE)},
]