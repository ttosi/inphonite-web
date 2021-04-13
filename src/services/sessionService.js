import config from "@/config";
import router from '@/router';
import { authService as auth } from '@/services';

export const sessionService = {
  timer: undefined,
  hasStarted: false,
  start() {
    if (!this.hasStarted) {
      window.addEventListener('mouseup', this.clicked);
      window.addEventListener('keyup', this.clicked);
    }
    this.timer = setTimeout(() => {
      console.log('timed out');
      this.timeout();
    }, config.sessionTimeout);
  },
  stop() {
    clearTimeout(this.timer);
    this.timer = undefined;
  },
  restart() {
    clearTimeout(this.timer);
    this.start();
  },
  clicked() {
    sessionService.hasStarted = true;
    sessionService.restart();
  },
  timeout() {
    window.removeEventListener('mouseup', this.clicked);
    window.removeEventListener('keyup', this.clicked);
    this.hasStarted = false;

    auth.logout().then(() => {
      this.stop();
      router.push({ path: '/login?message=You have been automatically logged out due to inactivity' });
    })
  }
};