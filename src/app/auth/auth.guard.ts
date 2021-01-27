import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { take, tap, switchMap } from "rxjs/operators";

import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
// CanLoad is a guard that runs before lazyload is fetched
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  // Check if user is authenticated before displaying content
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.userIsAuthenticated.pipe(
      take(1),
      switchMap((isAuthenticated) => {
        if (!isAuthenticated) {
          return this.authService.autoLogin();
        } else {
          return of(isAuthenticated);
        }
      }),
      tap((isAuthenticated) => {
        // If not authenticated, go back to the authentication page
        if (!isAuthenticated) {
          this.router.navigateByUrl("/auth");
        }
      })
    );
  }
}
